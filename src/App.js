import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import Header from "./components/Header/Header"
import InventoryItem from './pages/InventoryItem/InventoryItem'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route className="" path="/" element={<Navigate to='/warehouses' />} />

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
    </BrowserRouter>
  );
}

export default App;
