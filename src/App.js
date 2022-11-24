import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import './App.scss';
import Header from "./components/Header/Header";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import InventoryListHeadings from "./components/InventoryListHeadings/InventoryListHeadings";
import WarehouseDetailParent from "./components/WarehouseDetailParent/WarehouseDetailParent";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-container" >
        <Routes >
          <Route path="/" element={<Navigate to='/warehouses' />} />
          {/* Warehouse Routes */}
          <Route path="/warehouses" />
          <Route path="/warehouses/:warehouseid" />
          <Route path="/warehouses/:warehouseid/edit" />
          <Route path="/warehouses/new" element={<NewWarehouse />} />


          {/* Inventory Routes */}
          <Route path="/inventory" />
          <Route path="/inventory/:inventoryid" element={<InventoryItem /> } />
          <Route path="/inventory/:inventoryid/edit" />
          <Route path="/inventory/new" element={ <AddNewInventoryItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
