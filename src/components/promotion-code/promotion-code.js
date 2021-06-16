import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
class PromotionCode extends Component {
  constructor() {
    super();
    this.state = {
      currcode: "",
      content:"",
      price_discount:null,
      code: "",
      id: null,
      currType: 'add'
    };
  }
  componentWillMount() {
    // let tmp = [];
    // for (let i = 1; i <= this.props.totalpage; i++) {
    //   tmp.push(i);
    // }
    // this.setState({ pagination: tmp });
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.totalpage !== this.props.totalpage) {
    //   let tmp = [];
    //   for (let i = 1; i <= nextProps.totalpage; i++) {
    //     tmp.push(i);
    //   }
    //   this.setState({ pagination: tmp });
    // }
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

  add = () => {
    const {
      code
    } = this.state;
    if (code.length <=0) {
        toast.error("Code invalid");
        return; 
    } 
    const {
      content
    } = this.state;
    if (content.length <=0) {
        toast.error("Content invalid");
        return; 
    } 
    const {
      price_discount
    } = this.state;
    if (price_discount.length <=0) {
        toast.error("Price invalid");
        return; 
    } 
    this.props.addPromotionCode(this.state.code, this.state.content, this.state.price_discount)
  };
  update = () => {
    const {
      code
    } = this.state;
    if (code.length <=0) {
        toast.error("Code invalid");
        return; 
    } 
    this.props.updatePromotionCode(this.state.id, this.state.code, this.state.content, this.state.price_discount, this.state.status)
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
        content:"",
        price_discount:null,
        code: "",
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
                <li className="breadcrumb-item active" aria-current="page">Promotion Code Manager</li>
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
                    New Code
                </button>
                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Promotion Code</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-12">
                              <section className="panel">
                                
                                  <div className="form">
                                    <div className="form-validate form-horizontal">
                                      <div className="form-group ">
                                        <label for="content" className="control-label col-lg-2">
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
                                            id="content"
                                            name="content"
                                            minlength="5"
                                            type="text"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="cname" className="control-label col-lg-2">
                                          Code <span className="required">*</span>
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            onChange={e => {
                                              this.setState({
                                                code: e.target.value
                                              });
                                            }}
                                            value={this.state.code}
                                            className="form-control"
                                            id="cname"
                                            name="code"
                                            minlength="5"
                                            type="text"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="price" className="control-label col-lg-2">
                                          Discount <span className="required">*</span>
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            onChange={e => {
                                              this.setState({
                                                price_discount: e.target.value
                                              });
                                            }}
                                            value={this.state.price_discount}
                                            className="form-control"
                                            id="price"
                                            name="code"
                                            minlength="5"
                                            type="number"
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
                      <i className="fas fa-bars" /> Content
                    </th>
                    <th>
                      <i className="fas fa-chart-line" /> Price Discount
                    </th>
                    <th>
                      <i className="icon_profile" /> Code
                    </th>
                    <th>
                      <i className="icon_check_alt2" /> Status
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {this.props.promotionCode.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.content}</td>
                        <td>{element.price_discount}</td>
                        <td>{element.promotion_code}</td>
                        <td>{element.status.toString()}</td>
                        <td>
                          <div className="btn-group" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <span
                              onClick={() =>
                                this.setState({
                                  currcode: element.promotion_code,
                                  code: element.promotion_code,
                                  content: element.content,
                                  price_discount: element.price_discount,
                                  id: element._id,
                                  status:element.status,
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
export default PromotionCode;
