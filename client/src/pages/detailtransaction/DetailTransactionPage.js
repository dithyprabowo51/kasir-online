import React from 'react'
import './DetailTransactionPage.css'

// Router
import { useHistory } from 'react-router-dom'

const DetailTransactionPage = () => {
  const history = useHistory()
  return (
    <div className="detail-transaction-page">
      <h3>Transaction ID</h3>
      <p
        style={{ fontSize: '12px', color: 'blue', cursor: 'pointer' }}
        onClick={() => history.push('/list-transaction')}
      >
        Back to List Transactions
      </p>
      <div className="row mt-5">
        <div className="col-10 bg-white p-5">
          <div className="row">
            <div className="col-2">
              <p>Kasir ID</p>
            </div>
            <div className="col">
              <p>: Kasir ID</p>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <p>Kasir Name</p>
            </div>
            <div className="col">
              <p>: Kasir name</p>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <p>Date</p>
            </div>
            <div className="col">
              <p>: 11 June 2021</p>
            </div>
          </div>

          <div className="row mt-5">
            <h4 className="text-center">Product Items</h4>
          </div>

          <div className="row mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Product SKU</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row mt-5">
            <h6 className="text-end">Total : Rp. 1.000.000</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTransactionPage