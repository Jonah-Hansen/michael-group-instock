import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";
import WarehousesList from "../../components/WarehousesList/WarehousesList";

function WarehousesPage() {
  const [warehouseOrdered, setWarehouseOrdered] = useState(false)
  const [addressOrdered, setAddressOrdered] = useState(false)
  const [contactNameOrdered, setContactNameOrdered] = useState(false)
  const [contactInfoOrdered, setContactInfoOrdered] = useState(false)
  return (
    <>
      <PageHeader type={"list"} text={"warehouses"}/>
      <WarehousesHeadings
        setWarehouseOrdered={setWarehouseOrdered}
        setAddressOrdered={setAddressOrdered}
        setContactNameOrdered={setContactNameOrdered}
        setContactInfoOrdered={setContactInfoOrdered} />
      <WarehousesList
        warehouseOrdered={warehouseOrdered}
        addressOrdered={addressOrdered}
        contactNameOrdered={contactNameOrdered}
        contactInfoOrdered={contactInfoOrdered}
      />
    </>
  )
}

export default WarehousesPage