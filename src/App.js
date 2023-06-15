import "./App.css";
import Nav1 from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Dashbord from "./Dashbord";
import Order from "./Order";
import AddEmployee from "./component/AddEmployee";
import EmpProfile from "./component/EmpProfile";
import Visitor from "./component/Visitor";
import GinnieBox from "./component/GinnieBox";
import GinnieBoxDetail from "./component/GinnieBoxDetail";
import GinnieBoxProductDetail from "./component/GinnieBoxProductDetail";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import LeaveRequest from "./component/LeaveRequest";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderDetails from "./component/OrderDrtails";
import OrderProduct from "./component/OrderProduct";
import Employees from "./component/Employees";
import VisitorDetails from "./component/VisitorDetail";
import LeaveStatus from "./component/LeaveStatus";
import { Router } from "routes";
import AddProduct from "./component/AddProduct";

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
          <Route path="/employee" element={<Employees />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/empprofile" element={<EmpProfile />}></Route>
          <Route path="/visitor" element={<Visitor />}></Route>
          <Route path="/visitordetails" element={<VisitorDetails />}></Route>
          <Route path="/ginniebox" element={<GinnieBox />}>
            {" "}
          </Route>
          <Route path="/ginnieboxdetail" element={<GinnieBoxDetail />}></Route>
          <Route
            path="/ginnieboxproductdetail"
            element={<GinnieBoxProductDetail />}
          ></Route>
          <Route path="/leaverequest" element={<LeaveRequest />}></Route>

          <Route path="/product" element={<Product />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route path="/leavestatus" element={<LeaveStatus/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
