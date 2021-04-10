import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomerOrders } from "../../actions/order.action";
import { getProduct, listProducts } from "../../actions/product.action";
import Char from "../Chart";
// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sum: 1000
//     };
//   }
//   tinh(count) {
//     return (count / this.state.sum) * 100 + "%";
//   }
//   render() {
//     return (
      
//     );
//   }
// }
// export default Home;


const Home = (props) => {
  const order = useSelector((state) => state.order);
  const stock = useSelector((state) => state.stock);
  console.log(stock);

  const dispatch = useDispatch();
  useEffect(() => {
  
    dispatch(getCustomerOrders());
    dispatch(listProducts());
    
}, [dispatch])

  return (
    <div>

      <div>
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />Dashboard
                  </li>
                </ol>
              </div>
            </div>

            <div className="row">
              {/* <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box blue-bg">
                  <i className="fa fa-cloud-download" />
                  <div className="count">6.674</div>
                  <div className="title">Download</div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box brown-bg">
                  <i className="fa fa-shopping-cart" />
                  <div className="count">{order.orders.length}</div>
                  <div className="title">Purchased</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box dark-bg">
                  <i className="fa fa-thumbs-o-up" />
                  <div className="count">{order.orders.length}</div>
                  <div className="title">Order</div>
                </div>
              </div>

              <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-cubes" />
                  <div className="count">{stock.stock.length}</div>
                  <div className="title">Stock</div>
                </div>
              </div>
            </div>

           

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                       Statistical manuals
                      </strong>
                    </h2>
                  </div>
                 
                </div>
              </div>

             
            </div>

           <Char/>
            <br />
            <br />

            
          </section>
         
        </section>
      </div>
      
    </div>
  );
};

export default Home;
