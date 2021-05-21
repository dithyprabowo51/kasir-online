import React from 'react'

// Router
import { useHistory, useLocation } from 'react-router-dom'

const ProductMenu = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <div onClick={() => history.push('/product')} className={location.pathname === '/product' ? 'menu menu-active' : 'menu'}>
      <div>Product</div>
    </div>
  )
}

export default ProductMenu