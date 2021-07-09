import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: null,
      email: "",
      password: "",
      phone: "",
      currType: "add",
      is_admin: true,
      pagination: [],
    };
  }
  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
    if (nextProps.isadd === false) {
    } else if (nextProps.isadd === true) {
      this.reset();
    }
    if (nextProps.isupdate === false) {
    } else if (nextProps.isupdate === true) {
      this.reset();
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <nav aria-label="Page navigation">
            <ul className="pagination pagination-custom col-md-6 offset-md-3">
              <li className="page-item page-link" onClick={() => this.props.backPage()}>
              <span>Previous</span>
              </li>
              {this.state.pagination.map((element, index) => {
                if (this.props.page === element) {
                  return (
                    <li
                      className={this.props.page===element?'active page-item page-link':'page-item page-link'}
                      onClick={() => this.props.setPage(element)}
                    >
                      <span>{element}</span>
                    </li>
                  );
                } else {
                  return (
                    <li className={this.props.page===element?'active page-item page-link':'page-item page-link'} 
                      onClick={() => this.props.setPage(element)}>
                      <span>{element}</span>
                    </li>
                  );
                }
              })}
              <li className="page-item page-link" onClick={() => this.props.nextPage()}>
              <span>Next</span>
              </li>
            </ul>
        </nav>
        
      );
    }
  }
  isvalidEmail = email => {
    if (
      email.length < 6 ||
      email.indexOf(".") === -1 ||
      email.indexOf("@") === -1
    )
      return false;
    return true;
  };
  isvalidPhone = phone => {
    if (phone.length < 10) return false;
    for (let i = 0; i < phone.length; i++) {
      if (phone.charAt(i) < "0" || phone.charAt(i) > "9") return false;
    }
    return true;
  };

  addUser = () => {
    const {
      email,
      password,
      name,
      is_admin
    } = this.state;
    if (!this.isvalidEmail(email)) {
      toast.error("Email invalid")
      return;
    }
    if (password.length < 6) {
      toast.error("Password invalid")
      return;
    } 
    if (name.length < 3) {
      toast.error("Name invalid")
      return;
    } 
    this.props.addUser(
      email,
      password,
      name,
      is_admin
    );
  };
  updateUser = () => {
    const {
      email,
      name,
      status
    } = this.state;
    if (!this.isvalidEmail(email)) {
      toast.error("Email invalid")
      return;
    } 
    // if (password.length < 6) {
    //   this.setState({
    //     noti: "Password invalid"
    //   });
    //   return;
    // } else {
    //   this.setState({
    //     noti: ""
    //   });
    // }
    if (name.length < 3) {
      toast.error("Name invalid")
      return;
    }
    this.props.updateUser(
      email,
      name,
      status
    );
  };
  renderBtn = () => {
    // const {
    //   email,
    //   name,
    //   is_admin
    // } = this.state;
    if (this.state.currType === "add") {
      return (
          <div className="text-center">
            <button onClick={() =>this.addUser() }
             data-bs-dismiss="modal"
             className="btn btn-primary btn-custom__add">
              Add
            </button>
            <button disabled className="btn btn-primary btn-custom__add">
              Update
            </button>
            <button onClick={() => this.reset()} className="btn btn-primary btn-custom__add">
              Reset
            </button>
          </div>
      );
    } else {
      return (
          <div className="text-center">
            <button
              disabled
              onClick={() => this.addUser()}
              className="btn btn-primary btn-custom__add"
            >
              Add
            </button>
            <button onClick={() =>this.updateUser() }
              data-bs-dismiss="modal"
             className="btn btn-primary btn-custom__add">
              Update
            </button>
            <button onClick={() => this.reset()} className="btn btn-primary btn-custom__add">
              Reset
            </button>
          </div>
      );
    }
  };
  reset = () => {
    this.setState({
      //name: null,
      id: null,
      email: "",
      password: "",
      name: "",
      currType: "add",
      is_admin: false
    });
  };
  renderPassword = () => {
    if (this.state.currType === "add") {
      return (
        <div className="form-group ">
          <label for="cname" className="control-label col-lg-2">
            Password <span className="required">*</span>
          </label>
          <div className="col-lg-12">
            <input
              value={this.state.password}
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
              className="form-control"
              id="cname"
              name="fullname"
              minlength="5"
              type="password"
              required
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-group ">
          <label for="cname" className="control-label col-lg-2">
            Password <span className="required">*</span>
          </label>
          <div className="col-lg-12">
            <input
              disabled
              value={this.state.password}
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
              className="form-control"
              id="cname"
              name="fullname"
              minlength="5"
              type="password"
              required
            />
          </div>
        </div>
      );
    }
  };
  renderEmail = () => {
    if (this.state.currType === "add") {
      return (
        <div className="form-group ">
          <label for="cname" className="control-label col-lg-2">
            Email <span className="required">*</span>
          </label>
          <div className="col-lg-12">
            <input
              value={this.state.email}
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
              className="form-control"
              id="cname"
              name="fullname"
              minlength="5"
              type="text"
              required
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-group ">
          <label for="cname" className="control-label col-lg-2">
            Email <span className="required">*</span>
          </label>
          <div className="col-lg-12">
            <input
              disabled
              value={this.state.email}
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
              className="form-control"
              id="cname"
              name="fullname"
              minlength="5"
              type="text"
              required
            />
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <section id="main-content">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              <i className="fa fa-table" /> Table
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" ><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Library</li>
                <li className="breadcrumb-item active" aria-current="page">User Manager</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
            <button type="button" 
                  className="btn btn-primary pull-right mr-2 mb-2" 
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" 
                  >
                    New User
                </button>
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">User</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-12">
                              <section className="panel">
                                  <div className="form">
                                    <div className="form-validate form-horizontal">
                                      {this.renderEmail()}
                                      {this.renderPassword()}
                                      <div className="form-group ">
                                        <label for="cname" className="control-label col-lg-2">
                                          Name <span className="required" />
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            onChange={e => {
                                              this.setState({
                                                name: e.target.value
                                              });
                                            }}
                                            value={this.state.name}
                                            className="form-control"
                                            id="cname"
                                            name="fullname"
                                            minlength="5"
                                            type="text"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group d-flex">
                                        <label for="comment" className="control-label col-lg-2">
                                          Status
                                        </label>
                                        <div className="col-lg-12 d-flex" >
                                          
                                            <div className="form-check">
                                              <input
                                                checked={this.state.status}
                                                onClick={() => this.setState({ status: true })}
                                                type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1"
                                                className="form-check-input"
                                              />
                                               <label className="form-check-label" for="flexRadioDefault1">True</label> 
                                            </div>
                                            <div className="form-check ml-2">
                                              <input
                                                checked={!this.state.status}
                                                onClick={() => this.setState({ status: false })}
                                                type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1" 
                                                className="form-check-input"
                                              />
                                              <label className="form-check-label" for="flexRadioDefault1">False</label>
                                            </div>
                                          
                                        </div>
                                      </div>
                                      {this.renderBtn()}
                                    </div>
                                  </div> 
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>
                      <i className="icon_profile" />Email
                    </th>
                    <th>
                      <i className="icon_profile" />Name
                    </th>
                    <th>
                      <i className="icon_check_alt2" />Status
                    </th>
                    <th>
                      <i className="icon_cogs" />Action
                    </th>
                  </tr>
                  {this.props.user.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.email}</td>
                        <td>{element.name}</td>
                        <td>{element.status.toString()}</td>
                        <td>
                          <div className="btn-group"  >
                            <span
                              data-bs-toggle="modal" data-bs-target="#exampleModal"
                              onClick={() =>
                                this.setState({
                                  email: element.email,
                                  name: element.name,
                                  password: element.phone_number,
                                  is_admin: element.is_admin,
                                  status: element.status,
                                  currType: "update"
                                })
                              }
                              className="btn btn-success"
                            >
                              <i className="icon_check_alt2" />
                            </span>
                            <span
                              onClick={() =>
                                this.props.deleteUser(element._id)
                              }
                              className="btn btn-danger"
                            >
                              <i className="icon_close_alt2" />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {this.renderPagination()}
            </section>
          </div>
        </div>
        
      </section>
    );
  }
}
export default User;
