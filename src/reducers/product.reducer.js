import { productTypes, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, UPDATE_PRICE_BY_CATEGORY_FAIL, UPDATE_PRICE_BY_CATEGORY_REQUEST, UPDATE_PRICE_BY_CATEGORY_SUCCESS } from '../constants/action.types'
import { combineReducers } from 'redux'
const category = (state = { data: [], categorys:[] ,page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case productTypes.SET_CATEGORY_PRODUCT: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.SET_ALL_CATEGORY_PRODUCT: {
            return {
                ...state,
                categorys: action.data
            }
        }
        case productTypes.ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_CATEGORY_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_CATEGORY_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_CATEGORY_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_CATEGORY: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.CATEGORY_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.CATEGORY_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const brand = (state = {data: [], brands:[] ,page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case productTypes.SET_BRAND: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.SET_ALL_BRAND: {
            return {
                ...state,
                brands: action.data
            }
        }
        case productTypes.ADD_BRAND_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_BRAND_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_BRAND_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_BRAND_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_BRAND: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.BRAND_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.BRAND_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const color = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case productTypes.SET_COLOR: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.ADD_COLOR_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_COLOR_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_COLOR_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_COLOR_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_COLOR: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.COLOR_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.COLOR_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
//size
const size = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case productTypes.SET_SIZE: {
            return {
                ...state,
                data: action.data
            }
        }
        case productTypes.ADD_SIZE_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_SIZE_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_SIZE_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_SIZE_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_SIZE: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case productTypes.SIZE_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.SIZE_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
// const order = (state = { data: [], dataId:[], page: 1, totalpage: null}, action) => {
//     switch(action.type) {
//         case productTypes.ORDER_SET_PAGE: {
//             return {
//                 ...state,
//                 page: action.page
//             }
//         }
//         case productTypes.ORDER_SET_TOTAL_PAGE: {
//             return {
//                 ...state,
//                 totalpage: action.totalpage
//             }
//         }
//         case productTypes.ORDER_SET_DATA: {
//             return {
//                 ...state,
//                 data: action.data
//             }
//         }
//         case productTypes.ORDER_SET_DATA_BY_ID: {
//             return {
//                 ...state,
//                 dataId: action.data
//             }
//         }
//         default: return state
//     }
// }
const product = (state = {data: [], color:[],size:[] ,page: 1, totalpage: null}, action) => {
    switch(action.type){
        case productTypes.SET_PRODUCT: {
            return {
                ...state, 
                data: action.data
            }
        }
        case productTypes.SET_ALL_COLOR: {
            return {
                ...state, 
                color: action.color
            }
        }
        case productTypes.SET_ALL_SIZE: {
            return {
                ...state, 
                size: action.size
            }
        }
        case productTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case productTypes.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case productTypes.ADD_PRODUCT_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case productTypes.UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case productTypes.UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case productTypes.RESET_PRODUCT: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        default: return state
    }
}
function stockReducer(state={stock:[]}, action){
    switch(action.type){
        case PRODUCT_LIST_SUCCESS:
            return {loading : false, stock : action.payload};
        default : return state;
    }
}
function updatePriceByCategoryReducer(state={},action){
    switch(action.type){
        case UPDATE_PRICE_BY_CATEGORY_REQUEST:
            return {loading: true};
        case  UPDATE_PRICE_BY_CATEGORY_SUCCESS:
            return { loading : false };
    
        case UPDATE_PRICE_BY_CATEGORY_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
export default combineReducers({
    category,
    product, 
    brand,
    color,
    size
})
export {stockReducer,updatePriceByCategoryReducer}