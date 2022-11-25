import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import InventoryItem from "./pages/InventoryItem/InventoryItem";
import NewWarehousePage from "./pages/NewWarehousePage/NewWarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <BrowserRouter class='app' >
      <Header />
      <main className="page-container" >
        <Routes >
          <Route path="/" element={<Navigate to='/warehouses' />} />
          {/* Warehouse Routes */}
          <Route path="/warehouses" />
          <Route path="/warehouses/:warehouseid" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:warehouseid/edit" />
          <Route path="/warehouses/new" element={<NewWarehousePage />} />


          {/* Inventory Routes */}
          <Route path="/inventory" />
          <Route path="/inventory/:inventoryid" element={<InventoryItem />} />
          <Route path="/inventory/:inventoryid/edit" />
          <Route path="/inventory/new" element={<AddNewInventoryItem />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
