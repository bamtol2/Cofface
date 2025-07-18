import DetailHeader from '@/components/DetailHeader'
import { colors } from '@/styles/colors'
import { Text } from '@/styles/typography'
import { PlusCircleSolid } from 'iconoir-react'
import { useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

const Container = tw.div`
  w-full max-w-screen-sm mx-auto flex flex-col h-screen pb-4
`
const HeaderWrapper = tw.div`
  sticky top-0 z-10 bg-white w-full
`
const NameWrapper = tw.div`
  flex items-center justify-between px-2 py-2
`
const ContentContainer = tw.div`
  flex-1 overflow-auto px-4 pt-2
`
const CardWrapper = tw.div`
  flex flex-col gap-2 mt-1
`
const CardItem = tw.div`
  border border-gray rounded-md p-2 flex items-center justify-between
`
const Badge = tw.div`
  bg-light px-2 rounded-lg h-6 flex items-center
`

export function SettingPayPage() {
  const navigate = useNavigate()

  return (
    <Container>
      <HeaderWrapper>
        <DetailHeader title="결제 수단 관리" />
      </HeaderWrapper>
      <ContentContainer>
        <NameWrapper>
          <Text variant="body1" weight="bold">
            등록된 카드
          </Text>
          {/* //TODO - 카드 삭제, 대표카드 설정 기능 추가해야 됨 */}
          <Text variant="caption1" weight="semibold" color="dark">
            카드 설정
          </Text>
        </NameWrapper>
        <CardWrapper>
          <CardItem>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/90/60" className="rounded-md" />
              <div className="flex flex-col gap-1">
                <Text variant="caption1" weight="bold">
                  우리카드 (0091)
                </Text>
                <Text variant="caption2" weight="semibold" color="main">
                  NU 오하Check(오늘하루체크)
                </Text>
              </div>
            </div>
            <Badge>
              <Text variant="caption3" weight="bold" color="dark">
                대표 카드
              </Text>
            </Badge>
          </CardItem>
          <CardItem
            onClick={() => {
              navigate('/register/pay')
            }}
          >
            <div className="flex items-center gap-3">
              <PlusCircleSolid
                width={22}
                height={22}
                color={colors.littleDark}
              />
              <Text variant="caption1" weight="bold" color="littleDark">
                카드 등록하기
              </Text>
            </div>
          </CardItem>
        </CardWrapper>
      </ContentContainer>
    </Container>
  )
}
