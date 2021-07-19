import React, { Component } from 'react';

import {Link} from 'react-router-dom'
class Slider extends Component {
    render() {
        return (
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                        <li className="active">
                            <Link className="" to="/">
                                <i className="icon_house_alt "></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/productmanager">
                                <i className="fab fa-product-hunt"></i>
                                <span>Product</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/categorymanager">
                            <i className="icon_document_alt"></i>
                                <span>Category</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/brandmanager">
                            <i className="fas fa-cube "></i>
                                <span>Brand</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/colormanager">
                            <i className="fas fa-paint-brush "></i>
                                <span>Color</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/sizemanager">
                            <i className="fas fa-list-alt "></i>
                                <span>Size</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/usermanager">
                                <i className="far fa-user"></i>
                                <span>User</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/order">
                                <i className="icon_currency"></i>
                                <span>Order</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/banner">
                                <i className="fab fa-artstation"></i>
                                <span>Banner</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/promotion">
                                <i className="fas fa-chart-line"></i>
                                <span>Price Manage</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link className="" to="/promotion-code">
                                <i className="fas fa-dice-five"></i>
                                <span>Promotion Code</span>
                            </Link>
                        </li>
                        {/* <li className="sub-menu">
                            <a href="javascript:" className=""> 
                                <i className="icon_document_alt"></i>
                                <span>Manager</span>
                                <span className="menu-arrow arrow_carrot-right"></span>
                            </a>
                            <ul className="sub">
                                <li><a className="" href="/productmanager">Product </a></li>
                                <li><a className="" href="/categorymanager">Category </a></li>
                                <li><a className="" href="/brandmanager">Brand</a></li>
                                <li><a className="" href="/usermanager">User</a></li>
                                <li><a className="" href="/ordermanager">Order</a></li>
                            </ul>
                        </li> */}
                        
                    </ul>
                 </div>
                
        )
    }
}
export default Slider