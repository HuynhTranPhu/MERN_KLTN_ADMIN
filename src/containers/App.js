import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home.container";
import ProductContainer from "./product.container";
import CategoryContainer from "./category.container";
import BrandContainer from "./brand.container";
import UserContainer from "./user.container";
import LoginContainer from "./login.container";
import Orders from './OrderContainer/order.container'
import History from "./History";
import Bill from "./Bill";
import Promotion from "./Promotion";
import colorContainer from "./color.container";
import sizeContainer from "./size.container";
import promotionCodeContainer from "./promotion-code.container";
import bannerContainer from "./banner.container";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/productmanager" component={ProductContainer} />
          <Route exact path="/categorymanager" component={CategoryContainer} />
          <Route exact path="/brandmanager" component={BrandContainer} />
          <Route exact path="/colormanager" component={colorContainer} />
          <Route exact path="/sizemanager" component={sizeContainer} />
          <Route exact path="/usermanager" component={UserContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/ordermanager/:id" component={Orders} />
          <Route exact path="/order" component={History} />
          <Route exact path="/bill/:id" component={Bill} />
          <Route exact path="/promotion" component={Promotion} />
          <Route exact path="/banner" component={bannerContainer} />
          <Route exact path="/promotion-code" component={promotionCodeContainer} />
          {/* <Route exact path="*" component={NotFound} /> */}
          {/* <Route exact path="/view-orderDetail" component={viewOrderContainer} /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
