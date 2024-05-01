import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      {ctx.item.map((item) => {
        console.log(item);
        return (
          <div
            key={item.id}
            className="d-flex justify-content-between border border-top-0 border-end-0 border-start-0 border-3 border-dark border-5 rounded-pill px-5"
          >
            <div className="py-3 my-2">
              <h4 className="text-dark">{item.name}</h4>
              <h6 className="text-dark pt-2">Prize : ${item.prize}</h6>
              <h6 className="text-dark py-2">
                Quantity : ${item.productAmount}
              </h6>
            </div>
            <div className="py-3 my-2">
              <h4 className="text-dark pr-3">
                ${(item.productAmount * item.prize).toFixed(2)}
              </h4>
              <div>
                <button
                  type="button"
                  class="btn btn-dark mx-2 my-2"
                  onClick={() => {
                    ctx.addItem({
                      id: item.id,
                      amount: 1,
                      name: item.name,
                      prize: item.prize,
                      productAmount: 1,
                    });
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={() => {
                    ctx.removeItem({
                      id: item.id,
                      amount: 1,
                      name: item.name,
                      prize: item.prize,
                      productAmount: 1,
                    });
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="d-flex justify-content-between px-3 pt-5">
        <div>
          <h3 className="text-dark bold">Total Amount</h3>
        </div>
        <div>
          <h3>${ctx.totalAmount.toFixed(2)}</h3>
        </div>
      </div>
      <div className="d-flex justify-content-end my-2 mx-2">
        <button onClick={props.hide} type="button" class="btn btn-dark m-1">
          Close
        </button>
        {ctx.item.length > 0 && (
          <button type="button" class="btn btn-dark m-1">
            Order
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;
