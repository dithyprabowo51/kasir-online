import React from 'react'
import { useHistory, useLocation } from 'react-router'

const TransactionMenu = () => {
  const location = useLocation()
  const history = useHistory()
  return (
    <div
      className={location.pathname === '/transaction' ? 'menu menu-active' : 'menu'}
      onClick={() => history.push('/transaction')}>
      <div>Transaction</div>
    </div>
  )
}

export default TransactionMenu