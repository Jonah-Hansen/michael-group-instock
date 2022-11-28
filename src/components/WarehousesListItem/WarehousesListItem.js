import "./WarehousesListItem.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";


function WarehousesListItem ({name, address, city, country, contactName, contactPhone, contactEmail, warehouseId}) {
    const navigate = useNavigate()

    return (
        <div className="wh-row">
            <div className="wh-row__mobile">
                <div className="wh-row__wh">
                    <p className="wh-row__wh-name__heading">WAREHOUSE</p>
                    <p className="wh-row__wh-name" onClick={() => navigate(`/warehouses/${warehouseId}`)}>{name}</p>
                    <img className="wh-row__wh-icon" src={arrowIcon} alt="chevron right" />
                </div>
                <div className="wh-row__address">
                <p className="wh-row__address__heading">ADDRESS</p>
                <p className="wh-row__address-street">{address}</p>
                <p className="wh-row__address-city">{city}</p>
                <p className="wh-row__address-country">{country}</p>
                </div>
            </div>
            <div className="wh-row__mobile">
                <p className="wh-row__contact-name__heading">CONTACT NAME</p>
                <p className="wh-row__contact-name">{contactName}</p>
                <div className="wh-row__contact-info">
                <p className="wh-row__contact-info__heading">CONTACT INFORMATION</p>
                <p className="wh-row__contact-info__phone">{contactPhone}</p>
                <p className="wh-row__contact-info__email">{contactEmail}</p>
                </div>
            </div>
            <div className="wh-row__mobile-actions">
                <div className="wh-row__actions">
                    <img className="wh-row__actions-delete" src={deleteIcon} alt="red garbage can delete" />
                    <img className="wh-row__actions-edit" src={editIcon} alt="blue pen representing edit" onClick={() => navigate(`/warehouses/${warehouseId}/edit`)}/>
                </div>
            </div>
        </div>
    )
}

export default WarehousesListItem;