import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Banner from "../components/banner/banner";
class BannerContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getAllCategory();
    this.props.productActions.getBanner();
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
    if (nextProps.page !== this.props.page) {
      this.props.productActions.getBanner();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Banner
          banner={this.props.banner}
          isadd={this.props.isadd}
          category={this.props.category}
          addBanner={(content,category, status, discount,id_category) => 
            this.props.productActions.addBanner(content,category, status, discount,id_category)}
          updateBanner={(id,content,category, status, discount,id_category) =>
            this.props.productActions.updateBanner(id,content,category, status, discount,id_category)
          }
          isupdate={this.props.isupdate}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  banner: state.productReducers.banner.data,
  isadd: state.productReducers.banner.isadd,
  category: state.productReducers.category.categorys,
  isupdate: state.productReducers.banner.isupdate,
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
)(BannerContainer);
