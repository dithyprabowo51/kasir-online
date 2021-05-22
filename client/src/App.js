import './App.css';

// Components
import Sidebar from './components/sidebar/Sidebar.js'

// Pages
import Transaction from './pages/transaction/Transaction.js'
import ProductPage from './pages/product/ProductPage.js'
import StockIn from './pages/stockin/StockIn';
import SupplierPage from './pages/supplier/SupplierPage';
import ListTransaction from './pages/listtransaction/ListTransaction';
import DetailTransactionPage from './pages/detailtransaction/DetailTransactionPage';
import ProfilePage from './pages/profile/ProfilePage';
import EmployeePage from './pages/employee/EmployeePage';
import LoginPage from './pages/login/LoginPage';

import { Route, Switch, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <div className="App" style={location.pathname !== '/login' ? { paddingLeft: '235px', paddingTop: '20px' } : { paddingTop: '20px' }}>
      {
        location.pathname !== '/login' ?
          <Sidebar />
          :
          null
      }
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/transaction">
        <Transaction />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
      <Route path="/stock-in">
        <StockIn />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/employee">
        <EmployeePage />
      </Route>
      <Route path="/supplier">
        <SupplierPage />
      </Route>
      <Switch>
        <Route path="/list-transaction/:transactionId">
          <DetailTransactionPage />
        </Route>
        <Route path="/list-transaction">
          <ListTransaction />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
