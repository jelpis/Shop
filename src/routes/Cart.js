import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function Cart() {
  let a = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      {a.user}의 장바구니
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {a.cart.map((b, i) => {
            <tr key={i}>
              <td>{a.cart[i].id}</td>
              <td>{a.cart[i].name}</td>
              <td>{a.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
