import { combineReducers } from 'redux'
import productReducers,{stockReducer} from './product.reducer'
import userReducers from './user.reducer'
import { categoryListReducer, 
        getOrderByCategoryYearReducer, 
        getOrderByYearReducer, 
        getOrderSubTotalByCategoryYearReducer, 
        getOrderSubTotalByYearReducer, 
        getProFitByCategoryYearReducer, 
        getProFitByYearReducer, 
        getQuantityOrderByCategoryYearReducer, 
        getQuantityOrderByYearReducer, 
        productListSellingReducer} 
from './home.reducer';
import {getOderCustomerReducer,viewHistoryReducer} from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    order:getOderCustomerReducer,
    getQuantityOrder:getQuantityOrderByYearReducer,
    getOrderSubtotal:getOrderSubTotalByYearReducer,
    getProfit:getProFitByYearReducer,
    getOrderByYears:getOrderByYearReducer,
    getQuantityOrderByCategoryYears:getQuantityOrderByCategoryYearReducer,
    getOrderByCategoryYears: getOrderByCategoryYearReducer,
    getOrderSubTotalByCategoryYears: getOrderSubTotalByCategoryYearReducer,
    getProfitByCategoryYears: getProFitByCategoryYearReducer,
    categoryList: categoryListReducer,
    stock:stockReducer,
    viewHistoryOder:viewHistoryReducer,
    top10sale:productListSellingReducer
})