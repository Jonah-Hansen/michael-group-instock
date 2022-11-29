import "./InventoryListItem.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { NavLink, useNavigate } from "react-router-dom";

function InventoryListItem({ item })
{
const navigate = useNavigate()

    return (
        <div className="inventory-row">
            <div className="inventory-row__inventory">
                <p className="inventory-row__inventory-item" onClick={() => navigate(`/inventories/${item.id}`)}>{item.item_name}</p>
                <img className="inventory-row__inventory-icon" src={arrowIcon} alt="chevron right" />
            </div>
            <p className="inventory-row__cat">{item.category}</p>
            <div className="inventory-row__stock">
                <p className={item.quantity ? 'inventory-row__in-stock' : 'inventory-row__out-stock' }>{item.status}</p>
            </div>
            <p className="inventory-row__quantity">{item.quantity}</p>
            <p className="inventory-row__warehouse">{item.warehouse_name}</p>
            <div className="inventory-row__actions">
                <NavLink><img className="inventory-row__actions-delete" src={deleteIcon} alt="red garbage can delete" /></NavLink>
                <NavLink to={`/inventories/${item.id}/edit`}><img className="inventory-row__actions-edit" src={editIcon} alt="blue pen representing edit"/></NavLink>
            </div>
        </div>
    )
}

export default InventoryListItem;