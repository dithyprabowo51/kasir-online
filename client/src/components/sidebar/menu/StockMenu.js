import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'

const StockMenu = () => {
  const location = useLocation()
  const history = useHistory()

  const [isShowSubmenu, setIsShowSubmenu] = useState(false)

  return (
    <div>
      <div
        onClick={() => setIsShowSubmenu(!isShowSubmenu)}
        className={location.pathname === '/stock-in' || location.pathname === '/stock-out' ? 'menu menu-active' : 'menu'}>
        <div>Stock</div>
        <div>
          {
            isShowSubmenu ?
              <i className="fas fa-angle-up"></i>
              :
              <i className="fas fa-angle-down"></i>
          }
        </div>
      </div>
      {
        isShowSubmenu ?
          <div className="submenu-container">
            <div
              className={location.pathname === '/stock-in' ? 'submenu submenu-active' : 'submenu'}
              onClick={() => history.push('/stock-in')}
            >
              Stock in
            </div>
            <div className="submenu">Stock out</div>
          </div>
          :
          null
      }
    </div>
  )
}

export default StockMenu