import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddNewInventoryItemPage from "./pages/AddNewInventoryItemPage/AddNewInventoryItemPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoriesListPage from "./pages/InventoriesListPage/InventoriesListPage";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";
import NewWarehousePage from "./pages/NewWarehousePage/NewWarehousePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

function App() {
  return (
    <BrowserRouter class='app' >
      <div id="portal"></div>
      <Header />
      <main className="page-container" >
        <Routes >
          <Route path="/" element={<Navigate to='/warehouses' />} />
          {/* Warehouse Routes */}
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/warehouses/:warehouseid" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:warehouseid/edit" element={<EditWarehousePage />} />
          <Route path="/warehouses/new" element={<NewWarehousePage />} />


          {/* Inventory Routes */}
          <Route path="/inventories" element={<InventoriesListPage />} />
          <Route path="/inventories/:inventoryid" element={<InventoryItemPage />} />
          <Route path="/inventories/:inventoryid/edit" element={<EditInventoryPage />} />
          <Route path="/inventories/new" element={<AddNewInventoryItemPage />} />

          {/* Page Not Found */}
          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
