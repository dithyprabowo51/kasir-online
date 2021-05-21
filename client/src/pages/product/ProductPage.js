import React, { useState } from 'react'
import './ProductPage.css'

// Components
import AddProductModal from '../../components/modal/AddProductModal.js'
import EditProductModal from '../../components/modal/EditProductModal.js'

const ProductPage = () => {
  const [isShowAddProductModal, setIsShowAddProductModal] = useState(false)
  const [isShowEditProductModal, setIsShowEditProductModal] = useState(false)

  return (
    <div className="product-page">
      <h3>List Products</h3>
      <div className="row mt-5">
        <div className="col-8 text-end">
          <button onClick={() => setIsShowAddProductModal(true)} className="btn btn-primary">Add New Product</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Unit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button onClick={() => setIsShowEditProductModal(true)} className="btn btn-sm btn-warning mx-1">Edit</button>
                  <button className="btn btn-sm btn-danger mx-1">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {
        isShowAddProductModal ?
          <AddProductModal
            setIsShowAddProductModal={setIsShowAddProductModal}
          />
          :
          null
      }
      {
        isShowEditProductModal ?
          <EditProductModal
            setIsShowEditProductModal={setIsShowEditProductModal}
          />
          :
          null
      }
    </div>
  )
}

export default ProductPage