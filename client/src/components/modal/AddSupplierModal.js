import React from 'react'
import './AddSupplierModal.css'

const AddSupplierModal = props => {
  return (
    <div className="add-supplier-modal">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="text-center mb-4">Add Supplier Form</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="supplier_name" className="form-label">Supplier Name</label>
              <input type="text" className="form-control" id="supplier_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className="text-center">
              <button onClick={() => props.setIsShowAddSupplierModal(false)} type="button" className="btn btn-danger mx-1">Cancel</button>
              <button type="submit" className="btn btn-primary mx-1">Save</button>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default AddSupplierModal