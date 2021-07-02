import { combineReducers } from 'redux'
import productReducers,{stockReducer} from './product.reducer'
import userReducers from './user.reducer'
import { categoryListReducer, getOrderByCategoryYearReducer, getOrderByYearReducer, getOrderSubTotalByCategoryYearReducer, getOrderSubTotalByYearReducer, getQuantityOrderByCategoryYearReducer, getQuantityOrderByYearReducer } from './home.reducer';
import {getOderCustomerReducer,viewHistoryReducer} from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    order:getOderCustomerReducer,
    getQuantityOrder:getQuantityOrderByYearReducer,
    getOrderSubtotal:getOrderSubTotalByYearReducer,
    getOrderByYears:getOrderByYearReducer,
    getQuantityOrderByCategoryYears:getQuantityOrderByCategoryYearReducer,
    getOrderByCategoryYears: getOrderByCategoryYearReducer,
    getOrderSubTotalByCategoryYears: getOrderSubTotalByCategoryYearReducer,
    categoryList: categoryListReducer,
    stock:stockReducer,
    viewHistoryOder:viewHistoryReducer,
})