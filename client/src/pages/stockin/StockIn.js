import React, { useState } from 'react'
import AddStockInModal from '../../components/modal/AddStockInModal'
import './StockIn.css'

const StockIn = () => {
  const [isShowAddStockInModal, setIsShowAddStockInModal] = useState(false)

  return (
    <div className="stock-in">
      <h3>Stock In</h3>
      <div className="row mt-5">
        <div className="col-10 text-end">
          <button onClick={() => setIsShowAddStockInModal(true)} className="btn btn-primary">Add Stock In</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-10">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Product SKU</th>
                <th>Product Name</th>
                <th>Supplier</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {
        isShowAddStockInModal ?
          <AddStockInModal
            setIsShowAddStockInModal={setIsShowAddStockInModal}
          />
          :
          null
      }
    </div>
  )
}

export default StockIn