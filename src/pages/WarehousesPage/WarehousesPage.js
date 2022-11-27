import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";

const {
   REACT_APP_PORT: PORT = "8080",
   REACT_APP_BACKEND_URL: URL = "http://localhost"
 } = process.env;

//  whenever doing axios request 
//  USE:    axios.get(`${URL}:${PORT}/warehouse`)

function WarehousesPage() {
  return (
    <>
    <PageHeader type={"list"} text={"warehouses"} />
    <WarehousesHeadings />
    </>
  )
}

export default WarehousesPage