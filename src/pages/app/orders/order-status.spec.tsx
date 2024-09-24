import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order status', () => {
  it('should display the right text when order status is pending', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="pending" />)

    const statusText = getByText('Pendente')
    const badgetElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgetElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="canceled" />)

    const statusText = getByText('Cancelado')
    const badgetElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgetElement).toHaveClass('bg-rose-400')
  })

  it('should display the right text when order status is delivered', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivered" />,
    )

    const statusText = getByText('Entregue')
    const badgetElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgetElement).toHaveClass('bg-emerald-400')
  })

  it('should display the right text when order status is processing', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="processing" />,
    )

    const statusText = getByText('Em preparo')
    const badgetElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgetElement).toHaveClass('bg-amber-400')
  })

  it('should display the right text when order status is delivering', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivering" />,
    )

    const statusText = getByText('Em entrega')
    const badgetElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgetElement).toHaveClass('bg-amber-400')
  })
})
