import "./WarehouseDetails.scss";

function WarehouseDetails ({address , city , country , contact_name , contact_position , contact_phone , contact_email }) {

    return (
        <div className="wh">
            <div className="wh-address">
                <p className="wh-address__title">WAREHOUSE ADDRESS:</p>
                <p className="wh-address__address">{address}, {city}, {country}</p>
            </div>
            <div className="wh-contact">
                <div className="wh-contact-name">
                    <p className="wh-contact-name__title">CONTACT NAME:</p>
                    <p className="wh-contact-name__name">{contact_name}</p>
                    <p className="wh-contact-name__position">{contact_position}</p>
                </div>
                <div className="wh-contact-info">
                    <p className="wh-contact-info__title">CONTACT INFORMATION:</p>
                    <p className="wh-contact-info__phone">{contact_phone}</p>
                    <p className="wh-contact-info__email">{contact_email}</p>
                </div>
            </div>
        </div>
    )
};

export default WarehouseDetails;