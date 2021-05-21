import React from 'react'
import './AddStockInModal.css'

const AddStockInModal = props => {
  return (
    <div className="add-stockin-modal">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">
          <h5 className="text-center mb-4">Add Stock In Form</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="mb-3">
              <label htmlFor="supplier" className="form-label">Supplier</label>
              <input type="text" className="form-control" id="supplier" />
            </div>
            <div className="mb-3">
              <label htmlFor="sku" className="form-label">Product SKU</label>
              <select className="form-select">
                <option>=== SKU ===</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Product Name</label>
              <input readOnly type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input type="number" className="form-control" id="quantity" />
            </div>
            <div className="mb-3">
              <label htmlFor="unit" className="form-label">Satuan Unit</label>
              <input readOnly type="text" className="form-control" id="unit" />
            </div>
            <div className="text-center">
              <button onClick={() => props.setIsShowAddStockInModal(false)} type="button" className="btn btn-danger mx-1">Cancel</button>
              <button type="submit" className="btn btn-primary mx-1">Save</button>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default AddStockInModal