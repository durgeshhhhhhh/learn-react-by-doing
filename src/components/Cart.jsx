import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-10 mx-50">
      <h1 className="text-center  text-3xl font-bold">CART</h1>
      <div>
        {cartItem.length === 0 ? (
          <h2 className="text-center my-20">
            Your cart is empty. Please add items to your cart.
          </h2>
        ) : (
          <>
            <button
              className="cursor-pointer px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors ml-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            {cartItem.map((card, index) => {
              return <MenuCard key={index} item={card} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
