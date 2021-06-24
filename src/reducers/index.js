import { combineReducers } from 'redux'
import productReducers,{stockReducer} from './product.reducer'
import userReducers from './user.reducer'
import { categoryListReducer, getOrderByCategoryYearReducer, getOrderByYearReducer, getQuantityOrderByCategoryYearReducer, getQuantityOrderByYearReducer } from './home.reducer';
import {getOderCustomerReducer,viewHistoryReducer} from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    order:getOderCustomerReducer,
    getQuantityOrder:getQuantityOrderByYearReducer,
    getOrderByYears:getOrderByYearReducer,
    getQuantityOrderByCategoryYears:getQuantityOrderByCategoryYearReducer,
    getOrderByCategoryYears: getOrderByCategoryYearReducer,
    categoryList: categoryListReducer,
    stock:stockReducer,
    viewHistoryOder:viewHistoryReducer,
})