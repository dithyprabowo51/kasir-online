import React from 'react'
import './AddProductModal.css'

const AddProductModal = props => {
  return (
    <div className="add-product-modal">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="text-center mb-4">Add Product Form</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="sku" className="form-label">Product SKU</label>
              <input type="text" className="form-control" id="sku" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Product Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="unit" className="form-label">Satuan Unit</label>
              <input type="text" className="form-control" id="unit" />
            </div>
            <div className="text-center">
              <button onClick={() => props.setIsShowAddProductModal(false)} type="button" className="btn btn-danger mx-1">Cancel</button>
              <button type="submit" className="btn btn-primary mx-1">Save</button>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default AddProductModal