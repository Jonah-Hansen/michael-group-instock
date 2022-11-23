import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryListItem from "./components/InventoryListItem/InventoryListItem";

function App() {
  return (
    <BrowserRouter>
      <InventoryList />
      <Routes>
        <Route className="" path="/" element={<Navigate to='/warehouses' />} />
        Warehouse Routes
        <Route path="/warehouses" />
        <Route path="/warehouses/:warehouseid" />
        <Route path="/warehouses/:warehouseid/edit" />
        <Route path="/warehouses/new" />

        Inventory Routes
        <Route path="/inventory" />
        <Route path="/inventory/:inventoryid" />
        <Route path="/inventory/:inventoryid/edit" />
        <Route path="/inventory/new" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;