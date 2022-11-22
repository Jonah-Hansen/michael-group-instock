import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route className="" path="/" element={<Navigate to='/warehouses' />} />

          {/* Warehouse Routes */}
          <Route className="" path="/warehouses" />
          <Route className="" path="/warehouses/:warehouseid" />
          <Route className="" path="/warehouses/edit" />
          <Route className="" path="/warehouses/add" />

          {/* Inventory Routes */}
          <Route className="" path="/inventory" />
          <Route className="" path="/inventory/:inventoryid" />
          <Route className="" path="/inventory/edit" />
          <Route className="" path="/inventory/add" />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;