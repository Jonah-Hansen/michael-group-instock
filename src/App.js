import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          {/* Warehouse Routes */}
          <Route className="" path="/warehouses" element={} />
          <Route className="" path="/warehouses/:warehouseid" element={} />
          <Route className="" path="/warehouses/edit" element={} />
          <Route className="" path="/warehouses/add" element={} />

          {/* Inventory Routes */}
          <Route className="" path="/inventory"  element={}/>
          <Route className="" path="/inventory/:inventoryid" element={} />
          <Route className="" path="/inventory/edit" element={} />
          <Route className="" path="/inventory/add" element={} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;