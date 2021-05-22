import React from 'react'
import './EditEmployeeModal.css'

const EditEmployeeModal = props => {
  return (
    <div className="add-employee-modal">
      <div className="card" style={{ width: '25rem' }}>
        <div class="card-body">
          <h4 className="text-center mb-4">Edit Employee Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input
                className="form-control"
                id="fullname"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                className="form-control"
                id="phone"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input
                className="form-control"
                id="city"
                type="text"
              />
            </div>
            <div className="text-center mt-5">
              <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => props.setIsShowEditEmployeeModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary mx-1"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEmployeeModal