import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from './features/Products/ProductSlice.js';
import "./App.css";

const App = () => {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.product
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
          <h2 className='text-center text-muted mb-3'>Product</h2>
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow">

              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {item.title}
                </h5>

                <p className="card-text">
                  {item.description.slice(0, 50)}...
                </p>

                <h6 className="text-success">
                  ₹{item.price}
                </h6>
                <p className="badge bg-secondary">
                  {item.category}
                </p>


                <button className="btn btn-primary w-100">
                  View Product
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App;