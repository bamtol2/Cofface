import AuthRedirect from './components/AuthRedirect'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/home/HomePage'
import { StorePage } from './pages/home/StorePage'
import LoginConfirmPage from './pages/login/LoginConfirmPage'
import LoginVerifyPage from './pages/login/LoginVerifyPage'
import MainPage from './pages/login/MainPage'
import { FaceRegisterCapturePage } from './pages/register/FaceRegisterCapturePage'
import { FaceRegisterConfirmPage } from './pages/register/FaceRegisterConfirmPage'
import { FaceRegisterPage } from './pages/register/FaceRegisterPage'
import { PayRegisterPage } from './pages/register/PayRegisterPage'
import { SettingPage } from './pages/setting/SettingPage'
import { SettingPayPage } from './pages/setting/SettingPayPage'
import SurveyPage from './pages/survey/SurveyPage'
import Fonts from './styles/fonts'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import '@/firebaseConfig'
import { useEffect } from 'react'
import { registerServiceWorker } from './utils/firebaseUtils'
import { initNotificationListeners } from './services/notificationService'

function App() {
  // 앱 시작 시 FCM 초기화
  useEffect(() => {
    const initFCM = async () => {
      try {
        // 직접 서비스 워커 등록 시도
        const swRegistered = await registerServiceWorker()
        console.log('앱 초기화 중 서비스 워커 등록 결과:', swRegistered)

        // FCM 토큰이 로컬 스토리지에 있는지 확인
        const fcmToken = localStorage.getItem('fcm_token')
        if (fcmToken) {
          // Foreground 알림 리스너 등록
          initNotificationListeners()
          console.log('FCM 초기화 완료')
        }
      } catch (error) {
        console.error('FCM 초기화 중 오류:', error)
      }
    }

    initFCM()
  }, [])

  return (
    <>
      <Fonts />
      <Routes>
        {/* 인증 상태 따라 분기 */}
        <Route path="/" element={<AuthRedirect />} />

        {/* 공개 라우트 */}
        <Route path="/login" element={<MainPage />} />
        <Route path="/login/verify" element={<LoginVerifyPage />} />
        <Route path="/login/confirm" element={<LoginConfirmPage />} />

        {/* 보호된 라우트 */}
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/store/:storeId" element={<StorePage />} />

          <Route path="/register/face" element={<FaceRegisterPage />} />
          <Route
            path="/register/face/capture"
            element={<FaceRegisterCapturePage />}
          />
          <Route
            path="/register/face/confirm"
            element={<FaceRegisterConfirmPage />}
          />
          <Route path="/register/pay" element={<PayRegisterPage />} />

          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/pay" element={<SettingPayPage />} />
        </Route>

        {/* 이 외 페이지 처리 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
