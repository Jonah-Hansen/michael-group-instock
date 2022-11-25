import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import InventoryItem from "./pages/InventoryItem/InventoryItem";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-container" >
        <Routes >
          <Route path="/" element={<Navigate to='/warehouses' />} />
          {/* Warehouse Routes */}
          <Route path="/warehouses" />
          <Route path="/warehouses/:warehouseid" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:warehouseid/edit" />
          <Route path="/warehouses/new" element={<NewWarehouse />} />


          {/* Inventory Routes */}
          <Route path="/inventory" />
          <Route path="/inventory/:inventoryid" element={<InventoryItem />} />
          <Route path="/inventory/:inventoryid/edit" />
          <Route path="/inventory/new" element={<AddNewInventoryItem />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
