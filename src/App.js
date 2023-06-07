import "./App.css";
import Nav1 from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Dashbord from "./Dashbord";
import Order from "./Order";
import AddEmployee from "./component/AddEmployee";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderDetails from "./component/OrderDrtails";
import OrderProduct from "./component/OrderProduct";
import Employees from "./component/Employees";

function App() {
  return (
    <>
      {/* page1 */}

      {/* <Nav1></Nav1>
      <Herosection></Herosection>
      <Section></Section>
      <Footer></Footer> */}

      {/* page2 */}
      {/* <Dashbord></Dashbord> */}

      {/* page3 */}
      {/* <Order></Order> */}

      <BrowserRouter>
        <Nav1></Nav1>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/orderdetails" element={<OrderDetails />}></Route>
          <Route path="/orderproduct" element={<OrderProduct />}></Route>
          <Route path="/employee" element={<Employees></Employees>}></Route>
          <Route path="/addemployee" element={<AddEmployee></AddEmployee>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
