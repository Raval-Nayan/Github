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
import Panding from "./component/Panding";
import Approved from "./component/Approved";
import Rejected from "./component/Rejected";
import AddNewCategory from "./component/AddNewCategory";
import AddNewSubCategory from "./component/AddNewSubCategory";
import Message from "./component/Message";
// import Complaint from "./component/Complaint";
import ComplaintProfile from "./component/ComplaintProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderDetails from "./component/OrderDrtails";
import OrderProduct from "./component/OrderProduct";
import Employees from "./component/Employees";
import VisitorDetails from "./component/VisitorDetail";
import LeaveStatus from "./component/LeaveStatus";
import Category from "./component/Category";
import EditCategory from "./component/EditCategory";
import SubCategory from "./component/SubCategory";
import ChatBox from "./component/ChatBox";
import Logout from "./component/Logout";
import Report from "./component/Report";

import AddProduct from "./component/AddProduct";

function App() {
  return (
    <>
      {/* page1 */}

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
          <Route path="/leavestatus" element={<LeaveStatus />}></Route>
          <Route path="/panding" element={<Panding></Panding>}></Route>
          <Route path="/approved" element={<Approved />}></Route>
          <Route path="/rejected" element={<Rejected></Rejected>}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/addnewcategory" element={<AddNewCategory />}></Route>
          <Route
            path="/editcategory"
            element={<EditCategory></EditCategory>}
          ></Route>
          <Route path="/subcategory" element={<SubCategory />}></Route>
          <Route
            path="/addnewsubcategory"
            element={<AddNewSubCategory />}
          ></Route>
          <Route path="/message" element={<Message></Message>}></Route>
          <Route path="/chatbox" element={<ChatBox />}></Route>
          <Route path="/complaint" element={<ComplaintProfile />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/report" element={<Report/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
