import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import {closeModal} from '../features/modal/modalSlice';


const Modal = () => {
    const dispatch = useDispatch();
  return (
    <aside className="modal-container">
        <div className="modal">
            <h>Remove all items from your shopping cart?</h>
         <div className="btn-conatiner">
           <button type="button" className="btn confirm-btn" onClick={()=>{
            dispatch(clearCart());
            dispatch(closeModal());
           }}>
            Confirm
           </button>
           <button type="button" className="btn clear-btn" onClick={()=>{
            dispatch(closeModal());
           }}>
            Cancel
           </button>
         </div>
        </div>
        </aside>
  )
}
 export default Modal;