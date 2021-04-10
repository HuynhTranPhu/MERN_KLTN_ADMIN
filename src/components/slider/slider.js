import React, { Component } from 'react';

import {Link} from 'react-router-dom'
class Slider extends Component {
    render() {
        return (
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu">
                        <li className="active">
                            <Link className="" to="/">
                                <i className="icon_house_alt"></i>
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
                            <i className="fas fa-band-aid "></i>
                                <span>Brand</span>
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
                // <div class="wrapper">
                //         <nav id="sidebar">
                //             <div class="sidebar-header">
                //                 <h3>Bootstrap Sidebar</h3>
                //             </div>

                //             <ul class="list-unstyled components">
                //                 <p>Dummy Heading</p>
                //                 <li class="active">
                //                     <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                //                     <ul class="collapse list-unstyled" id="homeSubmenu">
                //                         <li>
                //                             <a href="#">Home 1</a>
                //                         </li>
                //                         <li>
                //                             <a href="#">Home 2</a>
                //                         </li>
                //                         <li>
                //                             <a href="#">Home 3</a>
                //                         </li>
                //                     </ul>
                //                 </li>
                //                 <li>
                //                     <a href="#">About</a>
                //                 </li>
                //                 <li>
                //                     <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                //                     <ul class="collapse list-unstyled" id="pageSubmenu">
                //                         <li>
                //                             <a href="#">Page 1</a>
                //                         </li>
                //                         <li>
                //                             <a href="#">Page 2</a>
                //                         </li>
                //                         <li>
                //                             <a href="#">Page 3</a>
                //                         </li>
                //                     </ul>
                //                 </li>
                //                 <li>
                //                     <a href="#">Portfolio</a>
                //                 </li>
                //                 <li>
                //                     <a href="#">Contact</a>
                //                 </li>
                //             </ul>
                //         </nav>

                // </div>
        )
    }
}
export default Slider