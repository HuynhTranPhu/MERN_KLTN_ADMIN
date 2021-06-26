import { orderConstants, REMOVE_ORDER_FAIL, REMOVE_ORDER_REQUEST, REMOVE_ORDER_SUCCESS,  VIEW_HISTORY_REQUEST,  VIEW_HISTORY_SUCCESS } from "../constants/action.types";
//import { combineReducers } from 'redux';

const initState = {
  orders: []
};

function getOderCustomerReducer (state = initState, action) {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_REQUEST:
      state = {
         ...state,
         loading:true
      }
      break;
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
         ...state,
        orders: action.payload,
        loading:false
      }
      break;
    default:
        return state;
  }

  return state;
};

function viewHistoryReducer (state = { viewHistory:{}}, action){
  switch(action.type){
      case  VIEW_HISTORY_REQUEST:
            state ={
              ...state,
              loading:true
           }
            break;
      case  VIEW_HISTORY_SUCCESS:
            state ={
              ...state,
              viewHistory: action.payload,
              loading:false
           }
            break;
      default:
            return state;  
  }
  return state;
}

function removeOrderReducer(state={}, action){
  switch(action.type){
      case REMOVE_ORDER_REQUEST:
          return {loading : true};
      case REMOVE_ORDER_SUCCESS:
          return {loading : false, success : true};
      case REMOVE_ORDER_FAIL:
          return {loading : false, error : action.payload};
      default : return state;
  }
}
export {getOderCustomerReducer,viewHistoryReducer, removeOrderReducer}
