import { useEffect, useState } from "react";
import { axiosInstance } from "../../helpers/axiosInstance";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import "./WarehouseDetailParent.scss";

function WarehouseDetailParent() {

  const [warehouseData, setWarehouseData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9`)
      .then((response) => {
        setWarehouseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <section className="warehouse-details">
      {warehouseData?.map(warehouseData => <WarehouseDetails
        key={warehouseData.id}
        name={warehouseData.warehouse_name}
        id={warehouseData.id}
        address={warehouseData.address}
        contact_name={warehouseData.contact_name}
        contact_position={warehouseData.contact_position}
        contact_phone={warehouseData.contact_phone}
        contact_email={warehouseData.contact_email}
      />)}
    </section>
  )
}

export default WarehouseDetailParent;