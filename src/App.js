import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import InventoryItem from "./pages/InventoryItem/InventoryItem";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-container" >
        <Routes >
          <Route path="/" element={<Navigate to='/warehouses' />} />
          {/* Warehouse Routes */}
          <Route path="/warehouses" element={<WarehousesPage />} />
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
