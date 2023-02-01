import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";
import {useSelector, useDispatch} from 'react-redux';
import {calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const {cartItems, isLoading} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems('random'))
  }, []);

  if(isLoading){
    return(
    <div className="isLoading">
      <h1>Loading...</h1>
    </div>
  );
    }
  return(
    <main>
      {isOpen && <Modal />}     
     <Navbar />
     <CartContainer/>
    </main>
  );
}
  

export default App;