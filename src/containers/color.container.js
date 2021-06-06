import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Color from "../components/color/color";
class ColorContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getColor();
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
      this.props.productActions.getColor();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Color
          color={this.props.color}
          isadd={this.props.isadd}
          addColor={(name, description ,status) => this.props.productActions.addColor(name,description,status)}
          updateColor={(id, name,description,status) =>
            this.props.productActions.updateColor(id, name,description,status)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.productActions.colorBackPage()}
          nextPage={() => this.props.productActions.colorNextPage()}
          setPage={page => this.props.productActions.colorSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  color: state.productReducers.color.data,
  isadd: state.productReducers.color.isadd,
  isupdate: state.productReducers.color.isupdate,
  islogin: state.userReducers.user.islogin,
  totalpage: state.productReducers.color.totalpage,
  page: state.productReducers.color.page
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
)(ColorContainer);
