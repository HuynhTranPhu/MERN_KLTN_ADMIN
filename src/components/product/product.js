import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
let tmpColor=[];
let tmpSize=[];
class Product extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [],
      product: null,
      files: [],
      //files: null,
      imagePreviewUrl: null,
      curr: "add",
      category: "category",
      brand: "brand",
      name: "",
      color:null,
      size:null,
      quantity:"",
      price: "",
      img: '',
      description: "",
      id_brand: "",
      id_category: "",
      id: null
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
    if (nextProps.product !== null) {
      this.setState({
        imagePreviewUrl: nextProps.product.img
      });
    }
    if (nextProps.isadd === true) {
      this.reset()
    } 
    if(nextProps.isupdate === true) {
      this.reset()
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
                    className="page-item page-link"
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
  handleChangeImg = e => {
    
    this.setState({ files: e.target.files })
  };
  // handleChangeImg = img => {
  //   if(img === undefined)
  //     return
  //   let reader = new FileReader();
  //   console.log(img)
  //   reader.onloadend = () => {
  //     this.setState({
  //       files: img,
  //       img: reader.result
  //     });
  //   };
  //   reader.readAsDataURL(img);
    
  // };
  
 
  handleAddSize = (e) => {

    let a = {_id: e.target.value}
    if(e.target.checked){
      tmpSize.push(a);
      
    }else{
      var index = tmpSize.map(function(e) { return e._id; }).indexOf(e.target.value);
      if (index> -1) {
        tmpSize.splice(index, 1);
      }
      console.log(index)
     
    } 
    this.setState({
      size: tmpSize
    })
    console.log(this.state.size)

  };
  
  handleAddColor = (e) =>{
    let a = {_id:e.target.value}
    if(e.target.checked){
      tmpColor.push(a);
      
    }else{
      var index = tmpColor.map(function(e) { return e._id; }).indexOf(e.target.value);
      if (index> -1) {
        tmpColor.splice(index, 1);
      }
      console.log(index)
     
    } 
    this.setState({
      color: tmpColor
    })
    console.log(this.state.color)
   
  }
  invalidPrice = t => {
    var str = t.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "+" || str.charAt(i) === "-") count++;
      else break;
    }
    str = str.substring(count, str.length);
    count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === ".") {
        count++;
      }
      if (str.charAt(i) < "0" || str.charAt(i) > "9") return false;
    }
    if (count > 1) return false;
    return !isNaN(Number.parseFloat(str));
  };
  submitAddProduct = () => {
    const {
      id_category,
      name,
      color,
      size,
      quantity,
      price,
      description,
      id_brand,
      files
    } = this.state;
    if (name.length <= 0) {
        toast.error("Name invalid");
        return; 
    } 
    if (color ==='') {
      toast.error("Color invalid"); 
      return; 
    }
    if (size === '') {
      toast.error("Size invalid"); 
      return; 
    }
    if (quantity <= 0) {
      toast.error("Quantity invalid");
      return; 
    } 
    if (!this.invalidPrice(price)) {
      toast.error("Price invalid");
      return; 
    }
    if (id_category === "") {
      toast.error("Category invalid");
      return; 
    } 
    if (id_brand === "") {
      toast.error("Brand invalid");
      return; 
    } 
    if (files === null) {
      toast.error("File invalid");
      return; 
    }
    this.props.addProduct(
      id_category,
      name,
      color,
      size,
      quantity,
      price,
      description,
      id_brand,
      files
    );
  };
  submitUpdateProduct = () => {
    const {
      id_category,
      name,
      color,
      size,
      quantity,
      price,
      description,
      id_brand,
      files,
      id, 
      img,
      status
    } = this.state;
    if (name.length <= 0) {
      toast.error("Name invalid");
      return;
    } 
    if (quantity <= 0) {
      toast.error("Quantity invalid");
      return;
    } 
    if (!this.invalidPrice(price)) {
      toast.error("Price invalid");
      return;
    } 
    if (id_category === "") {
      toast.error("Category invalid");
      return;
    } 
    if (id_brand === "") {
      toast.error("Brand invalid");
      return;
    }
    if (files.length < 0 && img === '' ) {
      toast.error("File invalid");
      return;
    }
    this.props.updateProduct(
      id,
      name,
      color,
      size,
      quantity,
      id_category,
      price,
      description,
      id_brand,
      files,
      status
    );
  };

  renderBtnSubmit = () => {
    if (this.state.curr === "add") {
      return (
        <div className=" text-center">
            <button
              onClick={() => { this.submitAddProduct()}}
              data-bs-dismiss="modal"
              className="btn btn-primary btn-custom__add"
              type="submit"
            >
              Add
            </button>
            <button className="btn btn-primary btn-custom__add" disabled type="button">
              Update
            </button>
            <button className="btn btn-primary btn-custom__add " onClick={() => this.reset()}>Reset</button>
          </div>
      );
    } else {
      return (
        <div className="text-center">
          
            <button className="btn btn-primary btn-custom__add " disabled type="submit">
              Add
            </button>
            <button
              className="btn btn-primary btn-custom__add "
              onClick={() => {this.submitUpdateProduct() }}
              data-bs-dismiss="modal"
              type="button"
            >
              Update
            </button>
            <button className="btn btn-primary btn-custom__add" onClick={() => this.reset()}>Reset</button>
         
        </div>
      );
    }
  };
  reset = () => {
    this.setState({
        //name: "",
        files: null,
        imagePreviewUrl: null,
        curr: "add",
        category: "category",
        brand: "brand",
        name: "",
        color:null,
        size:null,
        quantity:"",
        price: "",
        img: "",
        description: "",
        id_brand: "",
        id_category: "",
        id: null
    })
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
  renderMenuBrand = () => {
    if (this.props.brand) {
      return this.props.brand.map((element, index) => {
        return (
          <option
            onClick={() =>
              this.setState({ brand: element.name, id_brand: element._id })
            }
          >
            {element.name}
          </option>
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
  getNameBrandByID = id => {
    for (let i = 0; i < this.props.brand.length; i++) {
      if (id === this.props.brand[i]._id) return this.props.brand[i].name;
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
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Library</li>
                <li className="breadcrumb-item active" aria-current="page">Products manager</li>
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
                  New product
              </button>
              <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12">
                              <section className="panel">
                                  <div className="form" id="from-book">
                                    <div
                                      className="form-validate form-horizontal"
                                      id="feedback_form"
                                      method="get"
                                      action=""
                                    >
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
                                      <div className="form-group ">
                                        <label for="curl" className="control-label col-lg-2">
                                        Quantity
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            value={this.state.quantity}
                                            onChange={e =>
                                              this.setState({
                                                quantity: e.target.value
                                              })
                                            }
                                            className="form-control "
                                            id="curl"
                                            type="number"
                                            name="url"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="color" className="control-label col-lg-2">
                                        Color
                                        </label>
                                        <div className="col-lg-12 d-flex flex-wrap">
                                          {this.props.color.map((element,index) => {
                                            return ( 
                                              <div className="form-check ml-2" >
                                                <input 
                                                  className="form-check-input" 
                                                  type="checkbox" 
                                                  value={element._id}
                                                  onChange={this.handleAddColor}
                                                  id={element._id}
                                                  > 
                                                </input>
                                                <label className="form-check-label" for={element._id} > 
                                                  {element.name}
                                                 </label>
                                              </div> 
                                              );
                                          })}
                                        </div>
                                        <div className="form-group ">
                                            <label for="color" className="control-label col-lg-2">
                                            Size
                                            </label>
                                            <div className="col-lg-12 d-flex flex-wrap">
                                              {this.props.size.map((element) => {
                                                return ( 
                                                  <div className="form-check ml-2" >
                                                    <input 
                                                      className="form-check-input" 
                                                      type="checkbox" 
                                                      value={element._id}
                                                      onChange={this.handleAddSize} 
                                                      id={element._id}
                                                      > 
                                                    </input>
                                                    <label className="form-check-label" for={element._id} >
                                                      {element.name}
                                                    </label>  
                                                  </div> 
                                                  );
                                              })}
                                          </div>
                                        </div>
                                        
                                      </div>
                                      <div className="form-group ">
                                        <label for="curl" className="control-label col-lg-2">
                                          Price
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            value={this.state.price}
                                            onChange={e =>
                                              this.setState({
                                                price: e.target.value
                                              })
                                            }
                                            className="form-control "
                                            id="curl"
                                            type="number"
                                            name="url"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="cname" className="control-label col-lg-2">
                                          Description <span className="required">*</span>
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            value={this.state.description}
                                            onChange={e =>
                                              this.setState({
                                                description: e.target.value
                                              })
                                            }
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            minlength="5"
                                            type="text"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex">
                                        <div className="form-group col-lg-6 ">
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
                                        <div className="form-group col-lg-6">
                                          <label className="control-label col-lg-2">
                                            Brand
                                          </label>
                                          <div className=" dropdown btn-group form-control">
                                            <button
                                              style={{ width: "200px" }}
                                              type="button"
                                              className="btn btn-default dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              data-toggle="dropdown"
                                            >
                                              {this.state.brand} <span className="caret" />
                                            </button>
                                            <ul className="dropdown-menu" role="menu">
                                              {this.renderMenuBrand()}
                                            </ul>
                                          </div>
                                          
                                        </div>
                                      </div>
                                      
                                      <div className="form-group ">
                                        <label for="comment" className="control-label col-lg-2">
                                          Image upload{" "}
                                        </label>
                                        <div className="col-lg-12">
                                          <input
                                            className="form-control "
                                            type="file"
                                            id="ccomment"
                                            name="comment"
                                            multiple
                                            required
                                            //onChange={e=>this.handleChangeImg(e.target.files[0])}
                                            onChange={this.handleChangeImg}
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group ">
                                        <label for="comment" className="control-label col-lg-2">
                                          Image
                                        </label>
                                        <div className="col-lg-12">
                                          <img
                                            src={this.state.img}
                                            style={{ maxWidth: "100px" }}
                                            alt=""
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
                                      {this.renderBtnSubmit()}
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
                      <i className="icon_profile" /> Avatar
                    </th>
                    <th>
                      <i className="icon_profile" /> Name
                    </th>
                    <th>
                      <i className="icon_currency" /> Price
                    </th>
                    <th>
                      <i className="fas fa-paint-brush" /> Color
                    </th>
                    <th>
                      <i className="fas fa-list-alt" /> Size
                    </th>
                    <th>
                    <i class="fas fa-calculator"/> Quantity
                    </th>
                    <th>
                      <i className="fas fa-pen-alt" /> Description
                    </th>
                    <th>
                      <i className="icon_check_alt2" /> Status
                    </th>
                    <th>
                      <i className="icon_cogs" /> Action
                    </th>
                  </tr>
                  {this.props.product.map((element, index) => {
                    return (
                      <tr>
                        <td>
                          {
                             <img class="avatar" src={element.images[0]} alt="Product" />
                          }
                        </td>
                        <td style={{ width: "20%" }}>{element.name}</td>
                        <td>{element.price}</td>
                        <td>{element.colorProducts.colorProduct.map(item => (
                            <p key={item?._id?._id}>
                                {item?._id?.name}
                            </p> ))}
                        </td>
                        <td>{element.sizeProducts.sizeProduct.map(item => (
                            <p key={item?._id?._id}>
                                {item?._id?.name}
                            </p> ))}
                        </td>
                        <td>{element.quantity}</td>
                        <td style={{ width: "30%" }}>{element.description}</td>
                        <td>{element.status.toString()}</td>
                        <td>
                          <div className="btn-group"  >
                            <span
                              data-bs-toggle="modal" data-bs-target="#exampleModal"
                              onClick={() =>
                                this.setState({
                                  curr: "update",
                                  name: element.name,
                                  quantity: element.quantity,
                                  price: element.price,
                                  description: element.description,
                                  category: this.getNameCategoryByID(
                                    element.id_category
                                  ),
                                  id_category: element.id_category,
                                  id_brand: element.id_brand,
                                  brand: this.getNameBrandByID(
                                    element.id_brand
                                  ),
                                  img: element.images[0],
                                  id: element._id,
                                  status: element.status
                                })
                              }
                              className="btn btn-success"
                            >
                              <i className="icon_check_alt2" />
                            </span>
                            <span
                              onClick={() => this.props.deleteProduct(element._id)}
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
export default Product;
