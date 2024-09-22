import { api } from '@/lib/axios'

export interface CancelParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
