import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <h3 className="text-center" style={{ marginTop: '100px', marginBottom: '40px' }}>Login</h3>
      <div className="row justify-content-center mb-4">
        <div className="col-3 d-flex" style={{ borderBottom: '1px solid gray' }}>
          <div>
            <i className="fas fa-user"></i>
          </div>
          <div>
            <input
              style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '10px' }}
              className="input"
              placeholder="Email"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-3 d-flex" style={{ borderBottom: '1px solid gray' }}>
          <div>
            <i className="fas fa-key"></i>
          </div>
          <div>
            <input
              style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '10px' }}
              className="input"
              placeholder="Password"
              type="password"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success">Login</button>
      </div>
    </div>
  )
}

export default LoginPage