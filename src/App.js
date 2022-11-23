import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";

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
          <Route path="/inventory/:inventoryid" />
          <Route path="/inventory/:inventoryid/edit" />
          <Route path="/inventory/new" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
