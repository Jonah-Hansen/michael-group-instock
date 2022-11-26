import "./WarehouseDetails.scss";

function WarehouseDetails ({address , contact_name , contact_position , contact_phone , contact_email }) {

    return (
        <div className="wh">
            <div className="wh-address">
                <p className="wh-address__title">WAREHOUSE ADDRESS:</p>
                <p className="wh-address__address">33 Pearl Street SW, Washington, USA</p>
            </div>
            <div className="wh-contact">
                <div className="wh-contact-name">
                    <p className="wh-contact-name__title">CONTACT NAME:</p>
                    <p className="wh-contact-name__name">Greame Lyon</p>
                    <p className="wh-contact-name__position">Warehouse Manager</p>
                </div>
                <div className="wh-contact-info">
                    <p className="wh-contact-info__title">CONTACT INFORMATION:</p>
                    <p className="wh-contact-info__phone">+1 (646) 123-1234</p>
                    <p className="wh-contact-info__email">glyon@instock.com</p>
                </div>
            </div>
        </div>
    )
}

export default WarehouseDetails;