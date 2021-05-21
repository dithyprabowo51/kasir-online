import React from 'react'
import { useHistory, useLocation } from 'react-router'

const SupplierMenu = () => {
  const location = useLocation()
  const history = useHistory()
  return (
    <div
      className={location.pathname === '/supplier' ? 'menu menu-active' : 'menu'}
      onClick={() => history.push('/supplier')}>
      <div>Supplier</div>
    </div>
  )
}

export default SupplierMenu