import "./InventoryList.scss";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import { useEffect , useState } from 'react';
import axios from 'axios';

function InventoryList () {

    const [inventoryData , setInventoryData] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:8080/inventory`)
        .then ((response)=> {
        //    setInventoryData(response.data);
           console.log(response)
        })
        .catch ((error) => {
            console.log(error)
        });
    }, []);

    return (
        <section className="warehouse-list">
            {inventoryData?.map(inventoryData => <InventoryListItem
            key={inventoryData.id}
            name={inventoryData.item_name}
            id={inventoryData.id}
            warehouse_id={inventoryData.warehouse_id}
            category={inventoryData.category}
            status={inventoryData.status}
            quantity={inventoryData.quantity}
            />)}
        </section>
    )
}

export default InventoryList;