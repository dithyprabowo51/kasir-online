import './App.css';

// Components
import Sidebar from './components/sidebar/Sidebar.js'

// Pages
import Transaction from './pages/transaction/Transaction.js'
import ProductPage from './pages/product/ProductPage.js'
import StockIn from './pages/stockin/StockIn';
import SupplierPage from './pages/supplier/SupplierPage';
import ListTransaction from './pages/listtransaction/ListTransaction';

import { Route, Switch } from 'react-router-dom'
import DetailTransactionPage from './pages/detailtransaction/DetailTransactionPage';
import ProfilePage from './pages/profile/ProfilePage';
import EmployeePage from './pages/employee/EmployeePage';

function App() {
  return (
    <div className="App">
      <Sidebar />
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
