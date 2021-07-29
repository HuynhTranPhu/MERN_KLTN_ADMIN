import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import Product from "../components/product/product";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class ProductContainer extends Component {
  async componentWillMount() {
    this.props.productActions.getAllCategory();
    //this.props.productActions.getCategory();
    this.props.productActions.getProduct();
    this.props.productActions.getAllColor();
    this.props.productActions.getAllSize();
    //this.props.productActions.getBrand();
    this.props.productActions.getAllBrand();
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.props.productActions.getProduct();
    }
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Product
          color={this.props.color}
          size={this.props.size}
          product={this.props.product}
          totalpage={this.props.totalpage}
          page={this.props.page}
          category={this.props.category}
          brand={this.props.brand}
          deleteProduct={id => this.props.productActions.deleteProduct(id)}
          backPage={() => this.props.productActions.backPage()}
          nextPage={() => this.props.productActions.nextPage()}
          setPage={page => this.props.productActions.setPage(page)}
          isadd={this.props.isadd}
          isupdate={this.props.isupdate}
          addProduct={(
            id_category,
            name,
            color,
            size,
            quantity,
            price,
            price_import,
            description,
            id_brand,
            files
          ) =>
            this.props.productActions.addProduct(
              id_category,
              name,
              color,
              size,
              quantity,
              price,
              price_import,
              description,
              id_brand,
              files
            )
          }
          updateProduct={(
            id,
            name,
            color,
            size,
            quantity,
            id_category,
            price,
            price_import,
            description,
            id_brand,
            files,
            status
          ) =>
            this.props.productActions.updateProduct(
              id,
              name,
              color,
              size,
              quantity,
              id_category,
              price,
              price_import,
              description,
              id_brand,
              files,
              status
            )
          }
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  product: state.productReducers.product.data,
  color: state.productReducers.product.color,
  size: state.productReducers.product.size,
  totalpage: state.productReducers.product.totalpage,
  page: state.productReducers.product.page,
  category: state.productReducers.category.categorys,
  //category: state.productReducers.category.data,
  //brand: state.productReducers.brand.data,
  brand: state.productReducers.brand.brands,
  isadd: state.productReducers.product.isadd,
  isupdate: state.productReducers.product.isupdate,
  islogin: state.userReducers.user.islogin
});

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
