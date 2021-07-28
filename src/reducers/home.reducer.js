import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, GET_ORDER_BY_CATEGORY_YEAR_FAIL, GET_ORDER_BY_CATEGORY_YEAR_REQUEST, GET_ORDER_BY_CATEGORY_YEAR_SUCCESS, GET_ORDER_BY_YEAR_FAIL, GET_ORDER_BY_YEAR_REQUEST, GET_ORDER_BY_YEAR_SUCCESS, GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_FAIL, GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_REQUEST, GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_SUCCESS, GET_PROFIT_BY_CATEGORY_YEAR_FAIL, GET_PROFIT_BY_CATEGORY_YEAR_REQUEST, GET_PROFIT_BY_CATEGORY_YEAR_SUCCESS, GET_PROFIT_BY_YEAR_FAIL, GET_PROFIT_BY_YEAR_REQUEST, GET_PROFIT_BY_YEAR_SUCCESS, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_FAIL, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_REQUEST, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_SUCCESS, GET_QUANTITY_ORDER_BY_YEAR_FAIL, GET_QUANTITY_ORDER_BY_YEAR_REQUEST, GET_QUANTITY_ORDER_BY_YEAR_SUCCESS, GET_SUB_TOTAL_BY_YEAR_FAIL, GET_SUB_TOTAL_BY_YEAR_REQUEST, GET_SUB_TOTAL_BY_YEAR_SUCCESS, PRODUCT_LIST_SELLING_FAIL, PRODUCT_LIST_SELLING_REQUEST, PRODUCT_LIST_SELLING_SUCCESS } from "../constants/action.types";



function getOrderByYearReducer(state={ arrOrder:[]}, action){
    switch(action.type){
        case GET_ORDER_BY_YEAR_REQUEST:
            return {loading : true};
        case GET_ORDER_BY_YEAR_SUCCESS:
            return {loading : false, arrOrder : action.payload};
        case GET_ORDER_BY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function getOrderSubTotalByYearReducer(state={ arrOrderSubTotal:[]}, action){
    switch(action.type){
        case GET_SUB_TOTAL_BY_YEAR_REQUEST:
            return {loading : true};
        case GET_SUB_TOTAL_BY_YEAR_SUCCESS:
            return {loading : false, arrOrderSubTotal : action.payload};
        case GET_SUB_TOTAL_BY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
function getProFitByYearReducer(state={ arrProfit:[]}, action){
    switch(action.type){
        case GET_PROFIT_BY_YEAR_REQUEST:
            return {loading : true};
        case GET_PROFIT_BY_YEAR_SUCCESS:
            return {loading : false, arrProfit : action.payload};
        case GET_PROFIT_BY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
}
function getQuantityOrderByYearReducer(state={ quantityOrder:[]}, action){
    switch(action.type){
        case GET_QUANTITY_ORDER_BY_YEAR_REQUEST:
            return {loading : true};
        case GET_QUANTITY_ORDER_BY_YEAR_SUCCESS:
            return {loading : false, quantityOrder : action.payload};
        case GET_QUANTITY_ORDER_BY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function getQuantityOrderByCategoryYearReducer(state={ quantityCategoryOrder:[]}, action){
    switch(action.type){
        case GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_REQUEST:
            return {loading : true};
        case GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_SUCCESS:
            return {loading : false, quantityCategoryOrder : action.payload};
        case GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function getOrderByCategoryYearReducer(state={ arrCategoryOrder:[]}, action){
    switch(action.type){
        case GET_ORDER_BY_CATEGORY_YEAR_REQUEST:
            return {loading : true};
        case GET_ORDER_BY_CATEGORY_YEAR_SUCCESS:
            return {loading : false, arrCategoryOrder : action.payload};
        case GET_ORDER_BY_CATEGORY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function getOrderSubTotalByCategoryYearReducer(state={ arrCategoryOrderSubTotal:[]}, action){
    switch(action.type){
        case GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_REQUEST:
            return {loading : true};
        case GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_SUCCESS:
            return {loading : false, arrCategoryOrderSubTotal : action.payload};
        case GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function getProFitByCategoryYearReducer(state={ arrCategoryProfit:[]}, action){
    switch(action.type){
        case GET_PROFIT_BY_CATEGORY_YEAR_REQUEST:
            return {loading : true};
        case GET_PROFIT_BY_CATEGORY_YEAR_SUCCESS:
            return {loading : false, arrCategoryProfit : action.payload};
        case GET_PROFIT_BY_CATEGORY_YEAR_FAIL:
            return {loading : false, error : action.payload};
        default : return state;
    }
  }
function categoryListReducer(state={category:[]},action){
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return {loading: true, category:[]};
        case  CATEGORY_LIST_SUCCESS:
            return { loading : false , category: action.payload.data};
    
        case CATEGORY_LIST_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
//List product selling
function productListSellingReducer (state = { productSelling: {}}, action){
    switch(action.type){
        case PRODUCT_LIST_SELLING_REQUEST:
            return {loading: true, productSelling:{}};
        case  PRODUCT_LIST_SELLING_SUCCESS:
            return { loading : false , productSelling: action.payload};
        case PRODUCT_LIST_SELLING_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
export {getOrderByYearReducer,
     getQuantityOrderByYearReducer, 
     getQuantityOrderByCategoryYearReducer,
     getOrderByCategoryYearReducer,
     categoryListReducer,
     getOrderSubTotalByYearReducer,
     getOrderSubTotalByCategoryYearReducer,
     getProFitByYearReducer,
     getProFitByCategoryYearReducer,
     productListSellingReducer
}