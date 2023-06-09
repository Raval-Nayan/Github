import React from "react";
import "../css/orderproduct.css";
import image from "../img/image 11.png";

const OrderPro = () => {
  return (
    <>
      <div className="back-color-white ">
        {/* row1 */}
        <div className="row  ">
          <div className="col-md-5  col-sm-7 color-innnn me-md-5 ">
            <div className="row">
              <div className="col-lg-5 col-12 ">
                {" "}
                <img className="img-fluid" src={image} alt="nayan"></img>
              </div>
              <div className="col-lg-7 col-12">
                {" "}
                <div className="mt-md-0 mt-3">
                  <h6 className="h6----text">HIGHLANDER</h6>
                  <ul className="ul----text">
                    <li className="ul----text">
                      Men Slim Fit Solid Cut Away Collar Casual Jacket.
                    </li>
                    <li className="ul----text">Product Code : rtx34</li>
                    <li className="ul----text">Quantity : 20</li>
                    <li className="ul----text">Price : ₹ 19980</li>
                    <li className="ul----text">
                      Description : loremloremloremlorem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5  col-sm-7 color-innnn ms-md--3 mt-md-0 mt-3">
            <div className="row">
              <div className="col-lg-5 col-12">
                {" "}
                <img className="img-fluid " src={image} alt="nayan"></img>
              </div>
              <div className="col-lg-7 col-12 ">
                {" "}
                <div className="mt-md-0 mt-3">
                  <h6 className="h6----text">HIGHLANDER</h6>
                  <ul className="">
                    <li className="ul----text">
                      Men Slim Fit Solid Cut Away Collar Casual Jacket.
                    </li>
                    <li className="ul----text">Product Code : rtx34</li>
                    <li className="ul----text">Quantity : 20</li>
                    <li className="ul----text">Price : ₹ 19980</li>
                    <li className="ul----text">
                      Description : loremloremloremlorem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* row2 */}
        <div className="row   mt-3">
          <div className="col-md-5  col-sm-7 color-innnn me-md-5 ">
            <div className="row">
              <div className="col-lg-5 col-12 ">
                {" "}
                <img className="img-fluid" src={image} alt="nayan"></img>
              </div>
              <div className="col-lg-7 col-12">
                {" "}
                <div className="mt-md-0 mt-3">
                  <h6 className="h6----text">HIGHLANDER</h6>
                  <ul className="ul----text">
                    <li className="ul----text">
                      Men Slim Fit Solid Cut Away Collar Casual Jacket.
                    </li>
                    <li className="ul----text">Product Code : rtx34</li>
                    <li className="ul----text">Quantity : 20</li>
                    <li className="ul----text">Price : ₹ 19980</li>
                    <li className="ul----text">
                      Description : loremloremloremlorem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPro;
