import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import PromotionCode from "../components/promotion-code/promotion-code";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class PromotionCodeContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getPromotionCode();
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
      this.props.productActions.getPromotionCode();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <PromotionCode
          promotionCode={this.props.promotionCode}
          isadd={this.props.isadd}
          addPromotionCode={(code,content, price_discount ,status) => this.props.productActions.addPromotionCode(code,content, price_discount,status)}
          updatePromotionCode={(id, code,content, price_discount,status) =>
            this.props.productActions.updatePromotionCode(id, code,content, price_discount,status)
          }
          isupdate={this.props.isupdate}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  promotionCode: state.productReducers.promotionCode.data,
  isadd: state.productReducers.promotionCode.isadd,
  isupdate: state.productReducers.promotionCode.isupdate,
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
)(PromotionCodeContainer);
