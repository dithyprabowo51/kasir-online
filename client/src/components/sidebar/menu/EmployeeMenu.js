import React from 'react'

// Router
import { useHistory, useLocation } from 'react-router-dom'

const EmployeeMenu = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <div onClick={() => history.push('/employee')} className={location.pathname === '/employee' ? 'menu menu-active' : 'menu'}>
      <div>Employee</div>
    </div>
  )
}

export default EmployeeMenu