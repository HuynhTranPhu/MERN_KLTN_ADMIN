import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Size from "../components/size/size";
class SizeContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getSize();
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
      this.props.productActions.getSize();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Size
          size={this.props.size}
          isadd={this.props.isadd}
          addSize={(name, description ,status) => this.props.productActions.addSize(name,description,status)}
          updateSize={(id, name,description,status) =>
            this.props.productActions.updateSize(id, name,description,status)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.productActions.sizeBackPage()}
          nextPage={() => this.props.productActions.sizeNextPage()}
          setPage={page => this.props.productActions.sizeSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  size: state.productReducers.size.data,
  isadd: state.productReducers.size.isadd,
  isupdate: state.productReducers.size.isupdate,
  islogin: state.userReducers.user.islogin,
  totalpage: state.productReducers.size.totalpage,
  page: state.productReducers.size.page
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
)(SizeContainer);
