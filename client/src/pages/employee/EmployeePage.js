import React, { useState } from 'react'
import AddEmployeeModal from '../../components/modal/AddEmployeeModal'

const EmployeePage = () => {
  const [isShowAddEmployeeModal, setIsShowAddEmployeeModal] = useState(false)
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
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
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
    </div>
  )
}

export default EmployeePage