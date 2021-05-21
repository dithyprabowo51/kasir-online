import React, { useState } from 'react'

// Router
import { useHistory, useLocation } from 'react-router-dom'

const StockMenu = () => {
  const location = useLocation()
  const history = useHistory()

  const [isShowSubmenu, setIsShowSubmenu] = useState(false)

  return (
    <div>
      <div onClick={() => setIsShowSubmenu(!isShowSubmenu)} className={location.pathname === '/list-transaction' ? 'menu menu-active' : 'menu'}>
        <div>Report</div>
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
              onClick={() => history.push('/list-transaction')}
              className={location.pathname === '/list-transaction' ? 'submenu submenu-active' : 'submenu'}
            >
              List Transactions
            </div>
          </div>
          :
          null
      }
    </div>
  )
}

export default StockMenu