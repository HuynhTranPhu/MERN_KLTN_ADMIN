import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductsSelling } from "../../actions/home.action";
import { getCustomerOrders } from "../../actions/order.action";
import { listProducts } from "../../actions/product.action";
import Char from "../Chart";
import ChartTotal from "../chart-Total";



const Home = (props) => {
  const order = useSelector((state) => state.order);
  const stock = useSelector((state) => state.stock);

  const top10sale = useSelector((state) => state.top10sale);
  //console.log(top10sale?.productSelling?.arrQty?.map(i=> i));
  let n = 0;
  const dispatch = useDispatch();
  useEffect(() => {
  
    dispatch(getCustomerOrders());
    dispatch(listProducts());
    dispatch(listProductsSelling());
    
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
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
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
                       Statistical orders and Quantity manuals
                      </strong>
                    </h2>
                  </div>
                 
                </div>
              </div>
            </div>
           
           
           <Char/>
           <br />
            <br />
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                       Statistical total revenue and profit manuals
                      </strong>
                    </h2>
                  </div>
                 
                </div>
              </div>
            </div>
           <ChartTotal/>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                         Selling products
                      </strong>
                    </h2>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12" >
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark"> 
                                              <tr>
                                                  <th>Avatar</th>
                                                  <th>Name</th>
                                                  <th>Price</th>
                                                  <th>Quantity sold</th>
                                              
                                              </tr>      
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                top10sale?.productSelling?.arrProduct?.map(item=>
                                                <tr key={item._id}>
                                                    <td>{
                                                      <img
                                                        class="avatar"
                                                        src={
                                                          item.images[0]
                                                        }
                                                        alt="Product"
                                                      />
                                                    }</td>
                                                    <td>{item.name}</td>
                                                    
                                                    <td>{item.price}</td>
                                                    
                                                    <td>{top10sale?.productSelling?.arrQty?.map(i=> i)[n]} </td>
                                                    <td  style={{display:"none"}}>{n++}</td> 
                                                </tr>)
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
          </section>
         
        </section>
      </div>
      
    </div>
  );
};

export default Home;
