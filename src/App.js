import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import './App.scss';
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import InventoryListHeadings from "./components/InventoryListHeadings/InventoryListHeadings";
import WarehouseDetailParent from "./components/WarehouseDetailParent/WarehouseDetailParent";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <WarehouseDetails />
      <InventoryListHeadings />
      <InventoryList />
      <Routes>
        <Route className="" path="/" element={<Navigate to='/warehouses' />} />
        {/* Warehouse Routes */}
        <Route path="/warehouses" />
        <Route path="/warehouses/:warehouseid" />
        <Route path="/warehouses/:warehouseid/edit" />
        <Route path="/warehouses/new" element={<NewWarehouse />} />

        {/* Inventory Routes */}
        <Route path="/inventory" />
        <Route path="/inventory/:inventoryid" />
        <Route path="/inventory/:inventoryid/edit" />
        <Route path="/inventory/new" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
