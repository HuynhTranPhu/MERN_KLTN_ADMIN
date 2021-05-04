import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, GET_ORDER_BY_CATEGORY_YEAR_FAIL, GET_ORDER_BY_CATEGORY_YEAR_REQUEST, GET_ORDER_BY_CATEGORY_YEAR_SUCCESS, GET_ORDER_BY_YEAR_FAIL, GET_ORDER_BY_YEAR_REQUEST, GET_ORDER_BY_YEAR_SUCCESS, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_FAIL, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_REQUEST, GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_SUCCESS, GET_QUANTITY_ORDER_BY_YEAR_FAIL, GET_QUANTITY_ORDER_BY_YEAR_REQUEST, GET_QUANTITY_ORDER_BY_YEAR_SUCCESS } from "../constants/action.types";



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
export {getOrderByYearReducer,
     getQuantityOrderByYearReducer, 
     getQuantityOrderByCategoryYearReducer,
     getOrderByCategoryYearReducer,
     categoryListReducer
}