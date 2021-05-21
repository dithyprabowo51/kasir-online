import React from 'react'
import './Transaction.css'

const Transaction = () => {
  return (
    <div>
      <h3>Transaction</h3>
      <div className="row mt-4">
        <div className="col-6 bg-white p-3 container-search-product-form">
          <div className="mb-3 search-product-form">
            <label htmlFor="search-product" className="form-label">Search Product</label>
            <input
              type="text"
              className="form-control"
              id="search-product"
              placeholder="Search Product"
            />
            {/* <div className="posible-product">
              <div className="item-posible-product">Product 1</div>
              <div className="item-posible-product">Product 1</div>
              <div className="item-posible-product">Product 1</div>
            </div> */}
          </div>
          <div className="mb-3 search-product-form">
            <label htmlFor="amount-search" className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount-search"
              placeholder="Amount"
            />
          </div>
          <div>
            <button className="btn btn-success">Add</button>
          </div>
        </div>

        <div className="col-4 p-3 ms-5">
          <div className="total-amount">
            <p>Total Amount</p>
            <p>Rp. 3.000.000</p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-9 bg-white p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>
                  <input
                    type="number"
                  />
                </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete Item</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction