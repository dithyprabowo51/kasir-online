import React, { useState } from 'react'
import AddSupplierModal from '../../components/modal/AddSupplierModal.js'
import EditSupplierModal from '../../components/modal/EditSupplierModal.js'
import './SupplierPage.css'

const SupplierPage = () => {
  const [isShowAddSupplierModal, setIsShowAddSupplierModal] = useState(false)
  const [isShowEditSupplierModal, setIsShowEditSupplierModal] = useState(false)

  return (
    <div className="supplier-page">
      <h3>Supplier</h3>
      <div className="row mt-5">
        <div className="col-7 text-end">
          <button onClick={() => setIsShowAddSupplierModal(true)} className="btn btn-primary">Add New Supplier</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>
                  <button onClick={() => setIsShowEditSupplierModal(true)} className="btn btn-sm btn-warning mx-1">Edit</button>
                  <button className="btn btn-sm btn-danger mx-1">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <button className="page-link" disabled>Previous</button>
              </li>
              <li className="page-item"><span className="page-link">1</span></li>
              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {
        isShowAddSupplierModal ?
          <AddSupplierModal
            setIsShowAddSupplierModal={setIsShowAddSupplierModal}
          />
          :
          null
      }
      {
        isShowEditSupplierModal ?
          <EditSupplierModal
            setIsShowEditSupplierModal={setIsShowEditSupplierModal}
          />
          :
          null
      }
    </div>
  )
}

export default SupplierPage