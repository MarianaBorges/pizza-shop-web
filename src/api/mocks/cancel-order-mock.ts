import { http, HttpResponse } from 'msw'

import { CancelParams } from '../cancel-order'

export const cancelOrderMock = http.patch<CancelParams, never, never>(
  '/orders/:orderId/cancel',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
