import "./DeleteWarehouseModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg"
import ReactDOM from "react-dom";
import { axiosInstance } from "../../helpers/axiosInstance";

function DeleteWarehouseModal ({ onClose , show , name, warehouseId }) {

   
    if (!show) {
        return null
    };

    const handleSubmit = () => {
        axiosInstance.delete(`/warehouse/${warehouseId}`)
        .then(()=> {
            onClose();
        })
    };

    return ReactDOM.createPortal(
        <section>
            <div className='delete-container'>
                <div className='delete'>
                    <div className='delete-header'>
                        <img onClick={onClose} src={closeIcon} alt="close cross" />
                    </div>
                    <div className='delete-body'>
                        <h1 className='delete-body__title'>Delete {name} warehouse?</h1>
                        <p className='delete-body__text'>Please confirm that you'd like to delete the {name} from the list of warehouses. You won't be able to undo this action.</p>
                    </div>
                    <div className='delete-footer'>
                        <button onClick={onClose} className='delete-footer__cancel'>Cancel</button>
                        <button onClick={handleSubmit} className='delete-footer__delete'>Delete</button>
                    </div>
                </div>
            </div>
            <div className='overlay'></div>
        </section>,
        document.getElementById('portal')
    )
}

export default DeleteWarehouseModal;