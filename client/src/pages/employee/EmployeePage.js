import React, { useState } from 'react'
import AddEmployeeModal from '../../components/modal/AddEmployeeModal'
import EditEmployeeModal from '../../components/modal/EditEmployeeModal'

const EmployeePage = () => {
  const [isShowAddEmployeeModal, setIsShowAddEmployeeModal] = useState(false)
  const [isShowEditEmployeeModal, setIsShowEditEmployeeModal] = useState(false)

  return (
    <div className="employee-page">
      <h3>Employee</h3>
      <div className="row mt-5">
        <div className="col-7 text-end">
          <button onClick={() => setIsShowAddEmployeeModal(true)} className="btn btn-primary">Add New Employee</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mx-1"
                    onClick={() => setIsShowEditEmployeeModal(true)}
                  >
                    Edit
                  </button>
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
        isShowAddEmployeeModal ?
          <AddEmployeeModal
            setIsShowAddEmployeeModal={setIsShowAddEmployeeModal}
          />
          :
          null
      }
      {
        isShowEditEmployeeModal ?
          <EditEmployeeModal
            setIsShowEditEmployeeModal={setIsShowEditEmployeeModal}
          />
          :
          null
      }
    </div>
  )
}

export default EmployeePage