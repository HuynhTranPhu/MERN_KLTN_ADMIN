import { combineReducers } from 'redux'
import productReducers,{stockReducer} from './product.reducer'
import userReducers from './user.reducer'
import homeReducers, { categoryListReducer, getOrderByCategoryYearReducer, getOrderByYearReducer, getQuantityOrderByCategoryYearReducer, getQuantityOrderByYearReducer } from './home.reducer';
import orderReducer,{viewHistoryReducer} from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    order:orderReducer,
    getQuantityOrder:getQuantityOrderByYearReducer,
    getOrderByYears:getOrderByYearReducer,
    getQuantityOrderByCategoryYears:getQuantityOrderByCategoryYearReducer,
    getOrderByCategoryYears: getOrderByCategoryYearReducer,
    categoryList: categoryListReducer,
    stock:stockReducer,
    viewHistoryOder:viewHistoryReducer,
})