import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {

    render() {
        return (
            <header className="header dark-bg">
                <div className="toggle-nav">
                    <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu"></i></div>
                </div>
                <Link to="/" className="logo">E-Store <span className="lite">Admin</span></Link>

                <div className="top-nav notification-row">
                    <ul className="nav pull-right top-menu">
                        <li className="dropdown">
                            <p className="dropdown-toggle" data-bs-toggle="dropdown">
                                <span className="profile-ava">
                                    <img alt="" src="/img/avatar-mini2.jpg" />
                                </span>
                                <span className="username">Trần Phú</span>
                                <b className="caret"></b>
                            </p>
                            <ul className="dropdown-menu ">
                                <li className="dropdown-item">
                                    <Link to="/"><i className="fas fa-user"></i> MY PROFILE</Link>
                                </li>
                                <li className="dropdown-item"> 
                                    <Link to="#" onClick={() => this.props.logout()}><i className="fas fa-key"></i> LOG OUT</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </header>
        )
    }

}
export default Navbar