import React from 'react'

import { useHistory } from 'react-router-dom'

const ListTransaction = () => {
  const history = useHistory()
  return (
    <div className="list-transaction">
      <h3>List Transaction</h3>
      <div className="row mt-5">
        <div className="col-10">
          <table className="table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Kasir ID</th>
                <th>Kasir Name</th>
                <th>Date</th>
                <th>Amount</th>
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
                    className="btn btn-sm btn-info mx-1"
                    type="button"
                    onClick={() => history.push('/list-transaction/4')}
                  >
                    Detail
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
    </div>
  )
}

export default ListTransaction