import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
class Banner extends Component {
  constructor() {
    super();
    this.state = {
      currContent: "",
      content: "",
      category:"category",
      id_category:"",
      discount: null,
      id: null,
      currType: 'add'
    };
  }
  componentWillReceiveProps(nextProps) {
   
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
  renderMenuCategory = () => {
    if (this.props.category) {
      return this.props.category.map((element, index) => {
        return (
          <li
            onClick={() =>
              this.setState({
                category: element.name,
                id_category: element._id
              })
            }
          >
            {element.name}
          </li>
        );
      });
    } else {
      return null;
    }
  };
  getNameCategoryByID = id => {
    for (let i = 0; i < this.props.category.length; i++) {
      if (id === this.props.category[i]._id) return this.props.category[i].name;
    }
  };
  add = () => {
    const {
      content,
      discount
    } = this.state;
    if (content.length <=0) {
        toast.error("Content invalid");
        return; 
    } 
    if (discount <=0) {
        toast.error("Discount invalid");
        return; 
    } 
    this.props.addBanner(this.state.content, this.state.category, 
      this.state.status, this.state.discount, this.state.id_category)
  };
  update = () => {
    const {
      content
    } = this.state;
    if (content.length <=0) {
        toast.error("Content invalid");
        return; 
    } 
    this.props.updateBanner(this.state.id, this.state.content, this.state.category,
       this.state.status, this.state.discount, this.state.id_category)
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
        content: "",
        discount:null,
        category:'category',
        id_category: "",
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
                <li className="breadcrumb-item active" aria-current="page">Banner Manager</li>
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
                    New Banner
                </button>
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Banner</h5>
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
                                          Content <span className="required">*</span>
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            onChange={e => {
                                              this.setState({
                                                content: e.target.value
                                              });
                                            }}
                                            value={this.state.content}
                                            className="form-control"
                                            id="cname"
                                            name="fullname"
                                            minlength="5"
                                            type="text"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="discount" className="control-label col-lg-2">
                                          Discount <span className="required">*</span>
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            onChange={e => {
                                              this.setState({
                                                discount: e.target.value
                                              });
                                            }}
                                            value={this.state.discount}
                                            className="form-control"
                                            id="discount"
                                            type="number"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group col-lg-12">
                                          <label  className="control-label col-lg-2">
                                            Category
                                          </label>
                                          <div className="dropdown btn-group form-control ">
                                            <span  
                                              type="button"
                                              className="btn btn-default  dropdown-toggle  "
                                              data-bs-toggle="dropdown"
                                              id="dropdownMenuButton1"
                                              // aria-haspopup="true" 
                                              aria-expanded="false"
                                            >
                                              {this.state.category} 
                                            </span>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                              {this.renderMenuCategory()}
                                            </ul>
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
                      <i className="fas fa-bars" /> Content
                    </th>
                    <th>
                      <i className="fas fa-chart-line" /> Discount
                    </th>
                    <th>
                      <i className="icon_check_alt2" /> Status
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {this.props.banner.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.content}</td>
                        <td>{element.disCount}%</td>
                        <td>{element.status.toString()}</td>
                        <td>
                          <div className="btn-group" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <span
                              onClick={() =>
                                this.setState({
                                  currContent: element.content,
                                  content: element.content,
                                  id: element._id,
                                  discount:element.disCount,
                                  status:element.status,
                                  category: this.getNameCategoryByID(
                                    element.id_category
                                  ),
                                  id_category: element.id_category,
                                  currType: "update"
                                })
                              }
                              className="btn btn-success"
                            >
                              <i className="icon_check_alt2" />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </div>
        </div>
        
      </section>
    );
  }
}
export default Banner;
