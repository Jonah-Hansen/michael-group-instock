import "./InventoryListItemMobile.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link, useNavigate } from "react-router-dom"

export default function InventoryListItemMobile({ item, handleClick }) {
    const navigate = useNavigate()
    return (
      <div className="container">
    <div className="item">
        <div className="item-column">
              <div className="item-column-group">
                  <label className="item-column-group__label">inventory item</label>
                  <p className="item-column-group__name" onClick={() => navigate(`/inventories/${item.id}`)}>{item.item_name}</p>
                  <img className="item-column-group__chevron" src={arrowIcon} alt="chevron right" />
              </div>
              <div className="item-column-group">
                  <label className="item-column-group__label">category</label>
                  <p className="item-column-group__info" onClick={() => navigate(`/inventories/${item.id}`)}>{item.category}</p>
              </div>
          </div>
          
          <div className="item-column">
              <div className="item-column-group">
                 <label className="item-column-group__label">status</label>
                 <p className={`item-column-group__stock ${item.quantity > 0 ? 'item-column-group__stock--in-stock' : 'item-column-group__stock--out-of-stock'}`}>{ item.status }</p>
              </div>
              <div className="item-column-group">
                 <label className="item-column-group__label">qty</label>
                 <p className="item-column-group__info">{ item.quantity }</p>
              </div>
              <div className="item-column-group">
                 <label className="item-column-group__label">warehouse</label>
                 <p className="item-column-group__info">{ item.warehouse_name }</p>
              </div>
          </div>
          
    </div>
    <div className="item-row">
       <Link to={""}> <img className="inv-row__actions-delete" src={deleteIcon} alt="red garbage can delete" onClick={()=> handleClick(true, item.id, item.item_name)}/></Link>
       <Link to={`/inventories/${item.id}/edit`}><img className="inv-row__actions-edit" src={editIcon} alt="blue pen representing edit"/></Link>
    </div>
    </div>
  )
}
