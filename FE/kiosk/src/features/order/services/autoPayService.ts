import api from '@/lib/axios'
import { PayData } from '@/interfaces/PayInterface'

export const postAutoPay = async (payData: PayData) => {
  const response = await api.post('/api/auto-payments/process', payData)
  return response.data.data
}
