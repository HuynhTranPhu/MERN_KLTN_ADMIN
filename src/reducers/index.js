import { combineReducers } from 'redux'
import productReducers,{stockReducer} from './product.reducer'
import userReducers from './user.reducer'
import homeReducers from './home.reducer';
import orderReducer,{viewHistoryReducer} from './order.reducer';
export default combineReducers({
    productReducers,
    userReducers,
    homeReducers,
    order:orderReducer,
    stock:stockReducer,
    viewHistoryOder:viewHistoryReducer,
})