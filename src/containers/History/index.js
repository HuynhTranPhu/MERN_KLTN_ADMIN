import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCustomerOrders, viewHistoryGet } from '../../actions/order.action';
import Slider from '../../containers/slider.container';
import NavbarContainer from '../../containers/navbar.container';
import LoadingBox from '../../components/Config/LoadingBox';
import MessageBox from '../../components/Config/MessageBox';

const History = (props) => {
    const order = useSelector((state) => state.order);

    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getCustomerOrders());
}, [dispatch])
    return (
        <section id="container" className="">
        <NavbarContainer /> 
        <Slider />
        <div

        style={{
            paddingTop:"100px",
            padding: "10px 10px",
            marginLeft:"200px",
            alignItems: "center",
        }}
        >
        <h1 className="Order-title">.............</h1>
            {/* {loading?(
            <LoadingBox></LoadingBox>
            ):
            error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):( */}

                <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10" >
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark"> 
                                                {
                                                    order.orders.length === 0 ?(                                                  
                                                        <div className="empty-cart">
                                                            {/* <img className="empty-cart-img" src="/images/emptyCart.png" alt="Product" /> */}
                                                            <p className="empty-cart-note">Not orders now</p>
                                                            <Link className="empty-cart-shopping" to="/">Go to dashboard</Link>
                                                        </div>
                                                    ):
                                                    <tr>
                                                        <th>Id order</th>
                                                        <th>Date</th>
                                                        <th>Details</th>
                                                        <th>Total</th>
                                                        <th>Status</th>
                                                        <th style={{textAlign:"center"}}>Export Bill</th>
                                                    
                                                    </tr>   
                                                }
                                                
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                order.orders.map(item=>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.order_date.substring(0, 10)}</td>
                                                    {/* <td>
                                                        <div className="img">
                                                            <Link to={"/product/"+item.product}>
                                                                <img src={item.img} alt="Product" />
                                                                </Link>
                                                            <p><Link to ={"/product/" +item.product}> {item.name}</Link></p>
                                                        </div>
                                                    </td> */}
                                                    {/* <td>${item.order_subtotal}</td> */}
                                                    {/* <td>
                                                        <div className="qty">
                                                            
                                                            <input type="text"
                                                            value={item.count}  />
                                                            
                                                        </div>
                                                    </td> */}
                                                    <td><Link to={"/ordermanager/"+ item._id}>View Details</Link></td>
                                                    <td>${item.order_subtotal }</td>
                                                    <td>{item.paymentStatus}</td>
                                                    <td style={{textAlign:"center"}}><Link to={"/bill/"+ item._id}><i className="fas fa-file-export center"></i></Link></td>
                                                    {/* <td>
                                                        <button disabled={item.order_status.toString() ==="delivering"} onClick ={() =>removeOrderHandler(item._id)}>
                                                                <i className="fa fa-trash" />
                                                        </button>
                                                    </td> */}
                                                    
                                                
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

             {/* )
            }  */}

        </div>
            
        </section>
    );
};

export default History;