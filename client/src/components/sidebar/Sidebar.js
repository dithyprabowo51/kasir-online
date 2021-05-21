import React from 'react'
import './Sidebar.css'

// Components
import DashboardMenu from './menu/DashboardMenu.js'
import StockMenu from './menu/StockMenu.js'
import ProductMenu from './menu/ProductMenu.js'
import TransactionMenu from './menu/TransactionMenu.js'
import SupplierMenu from './menu/SupplierMenu.js'
import ReportMenu from './menu/ReportMenu.js'
import { useHistory } from 'react-router'
import EmployeeMenu from './menu/EmployeeMenu'

const Sidebar = () => {
  const history = useHistory()
  return (
    <div className="sidebar">
      <div style={{ textAlign: 'center' }}>
        <h4>Welcome</h4>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/profile')}
        >Adityo Prabowo</div>
      </div>
      <hr />
      <div style={{ marginTop: '25px' }}>
        <DashboardMenu />
        <SupplierMenu />
        <ProductMenu />
        <StockMenu />
        <TransactionMenu />
        <ReportMenu />
        <EmployeeMenu />
        <div className="text-center mt-5">
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar