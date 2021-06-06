import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
class Brand extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [],
      currname: "",
      name: "",
      id: null,
      currType: 'add'
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
      this.setState({
        name: "",
        currType: 'add'
      });
    }
    if (nextProps.isupdate === false) {
      
    } else if (nextProps.isupdate === true) {
      this.setState({
        id: null,
        name: "",
        currType: 'add'
      });
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
            <a>Previous</a>
            </li>
            {this.state.pagination.map((element, index) => {
              if (this.props.page === element) {
                return (
                  <li
                  className="page-item page-link" href="/#"
                    onClick={() => this.props.setPage(element)}
                  >
                    <a>{element}</a>
                  </li>
                );
              } else {
                return (
                  <li className="page-item page-link" onClick={() => this.props.setPage(element)}>
                    <a>{element}</a>
                  </li>
                );
              }
            })}
            <li className="page-item page-link" onClick={() => this.props.nextPage()}>
            <a>Next</a>
            </li>
            </ul>
        </nav>
        
      );
    }
  }
  add = () => {
    const {
      name
    } = this.state;
    if (name.length <=0) {
        toast.error("Name invalid");
        return; 
    } 
    this.props.addBrand(this.state.name, this.state.status)
  };
  update = () => {
    const {
      name
    } = this.state;
    if (name.length <=0) {
        toast.error("Name invalid");
        return; 
    } 
    this.props.updateBrand(this.state.id, this.state.name, this.state.status)
  };
  renderBtn = () => {
    if (this.state.currType === "add") {
      return (
        
          <div className="text-center">
            <button
              onClick={() => this.add()}
              data-bs-dismiss="modal"
              className="btn btn-primary btn-custom__add"
            >
              Add
            </button>
            <button
              disabled
              onClick={() =>this.update() }
              className="btn btn-primary btn-custom__add"
            >
              Update
            </button>
            <button
              onClick={() => this.reset()}
              className="btn btn-primary btn-custom__add"
            >
              Reset
            </button>
          </div>
       
      );
    } else {
      return (
          <div className="text-center">
            <button
              disabled
              onClick={() => this.add()}
              className="btn btn-primary btn-custom__add"
            >
              Add
            </button>
            <button
              onClick={() => this.update() }
              data-bs-dismiss="modal"
              className="btn btn-primary btn-custom__add"
            >
              Update
            </button>
            <button
              onClick={() => this.reset()}
              className="btn btn-primary btn-custom__add"
            >
              Reset
            </button>
          </div>
      );
    }
  };
  reset = () => {
      this.setState({
        id: null,
        name: "",
        currType: 'add'
      })
  }
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
                <li className="breadcrumb-item active" aria-current="page">Brand Manager</li>
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
                    New Brand
                </button>
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Brand</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-12">
                              <section className="panel">
                                
                                  <div className="form">
                                    <div className="form-validate form-horizontal">
                                      <div className="form-group ">
                                        <label for="cname" className="control-label col-lg-2">
                                          Name <span className="required">*</span>
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
                                          
                                            <div class="form-check">
                                              <input
                                                checked={this.state.status}
                                                onClick={() => this.setState({ status: true })}
                                                type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1"
                                                className="form-check-input"
                                              />
                                              <label className="form-check-label" for="flexRadioDefault1">True</label>
                                            </div>
                                            <div class="form-check ml-2">
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
                      <i className="icon_profile" /> Name
                    </th>
                    <th>
                      <i className="icon_check_alt2" /> Status
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {this.props.brand.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>{element.status.toString()}</td>
                        <td>
                          <div className="btn-group" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <a
                              onClick={() =>
                                this.setState({
                                  currname: element.name,
                                  name: element.name,
                                  id: element._id,
                                  status:element.status,
                                  currType: "update"
                                })
                              }
                              className="btn btn-success"
                            >
                              <i className="icon_check_alt2" />
                            </a>
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
export default Brand;
