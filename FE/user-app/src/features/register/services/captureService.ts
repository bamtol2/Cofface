import axios from 'axios'
import { CapturedImage } from '@/interfaces/FaceRegisterInterfaces'
import { FACE_URL } from '@/config'

// API 인스턴스 생성
const api = axios.create({
  baseURL: FACE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
})

/**
 * 얼굴 등록 API 함수
 * 캡처된 5방향 얼굴 이미지와 사용자 ID를 서버에 전송
 */
export const registerFace = async (
  name: string,
  phoneNumber: string,
  capturedImages: CapturedImage[],
): Promise<any> => {
  console.log('등록 시작: 사용자이름', name, '전화번호', phoneNumber)
  console.log('캡처된 이미지 수:', capturedImages.length)

  try {
    // 캡처된 이미지를 방향별로 매핑
    const directionMap: { [key: number]: string } = {
      1: 'front', // FaceDetectionState.FRONT_FACE
      2: 'left', // FaceDetectionState.LEFT_FACE
      3: 'right', // FaceDetectionState.RIGHT_FACE
      4: 'up', // FaceDetectionState.UP_FACE
      5: 'down', // FaceDetectionState.DOWN_FACE
    }

    // API 요청 형식에 맞게 데이터 변환
    const faceImages: Record<string, string> = {}

    capturedImages.forEach((img) => {
      const direction = directionMap[img.state]
      if (direction) {
        // 이미지가 base64 형식인지 확인
        if (
          img.imageData.startsWith('data:image/') &&
          img.imageData.includes('base64,')
        ) {
          faceImages[direction] = img.imageData
        } else {
          console.error(
            `${direction} 방향 이미지 형식이 잘못됨:`,
            img.imageData.substring(0, 50) + '...',
          )
        }
      }
    })

    // 모든 방향(5개)이 있는지 확인
    const requiredDirections = ['front', 'left', 'right', 'up', 'down']
    const missingDirections = requiredDirections.filter(
      (dir) => !faceImages[dir],
    )

    if (missingDirections.length > 0) {
      throw new Error(
        `다음 방향의 얼굴 이미지가 누락되었습니다: ${missingDirections.join(', ')}`,
      )
    }

    // 서버에 요청 전송
    const response = await api.post('/register', {
      name: name,
      phone_number: phoneNumber,
      face_images: faceImages,
    })

    console.log('서버 응답:', response.data)
    return response.data
  } catch (error) {
    console.error('얼굴 등록 API 호출 중 오류 발생:', error)

    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `등록 실패: ${error.response.data.detail || '서버 오류'}`,
        )
      } else if (error.request) {
        throw new Error('서버에 연결할 수 없습니다')
      }
    }
    throw error
  }
}

export default {
  registerFace,
}
