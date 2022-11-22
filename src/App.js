import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";


function App() {
    const items = ['banana', 'strawberry', 'apples']
  return (
    <div className="App">
      <DropDownMenu items={items} />
      <Button text={'+ add item'}/>
      <Button text={'cancel'} isCancel/>
      <Button text={'delete'} isDelete/>
    </div>
  );
}

export default App;


/**
 *  <BrowserRouter>
        {/* <Header /> */
        // <Routes>
        //   <Route className="" path="/" element={<Navigate to='/warehouses' />} />

          {/* Warehouse Routes */}
          // <Route className="" path="/warehouses" element={<></> } />
          // <Route className="" path="/warehouses/:warehouseid" element={<></> } />
          // <Route className="" path="/warehouses/edit" element={<></> } />
          // <Route className="" path="/warehouses/add" element={ <></>} />

          {/* Inventory Routes */}
          // <Route className="" path="/inventory" element={ <></>} />
          // <Route className="" path="/inventory/:inventoryid" element={<></> } />
          // <Route className="" path="/inventory/edit" element={ <></>} />
          // <Route className="" path="/inventory/add" element={ <></>} />

      //   </Routes>
      // </BrowserRouter>
