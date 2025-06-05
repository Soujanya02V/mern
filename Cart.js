import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart({onClose}) {
  let  data = useCart();
  let dispatch = useDispatchCart();

  console.log("Cart component data:", data);

  if (!data || data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!!</div>
        
      </div>
    );
  }

  let  totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.price}/-</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch({ type: "REMOVE", index:index })}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fs-5 fw-bold text-success">Total: ₹{totalPrice}/-</div>
        <button className="btn bg-success mt-3">Check Out</button>
        {onClose && <button className="btn btn-danger mt-3 ms-3" onClick={onClose}>Close</button>}
      </div>
    </div>
  );
}
