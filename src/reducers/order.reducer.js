import { orderConstants, REMOVE_ORDER_FAIL, REMOVE_ORDER_REQUEST, REMOVE_ORDER_SUCCESS, VIEW_HISTORY_FAIL, VIEW_HISTORY_REQUEST, VIEW_HISTORY_SUCCESS } from "../constants/action.types";
//import { combineReducers } from 'redux';

const initState = {
  orders: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
         ...state,
        orders: action.payload
      }
      break;
  }

  return state;
};
// function orderReducer (state= {orders:[]}, action)
// {
//   switch(action.type){
//     case orderConstants.GET_CUSTOMER_ORDER_REQUEST:
//         return {loading: true, orders:[]};
//     case  orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
//         return { loading : false , orders: action.payload};
//     case orderConstants.GET_CUSTOMER_ORDER_FAILURE:
//         return { loading : false, error: action.payload};
//     default:
//         return state;
// }
// }
// export {orderReducer}
function viewHistoryReducer (state = { viewHistory:[]}, action){
  switch(action.type){
      case  VIEW_HISTORY_SUCCESS:
            state ={
              ...state,
              viewHistory: action.payload,
              loading:false
           }
            break;
          
  }
  return state;
}
// function viewHistoryReducer (state = { viewHistory:[]}, action){
//   switch(action.type){
//       case VIEW_HISTORY_REQUEST:
//           return {loading: true, viewHistory:[]};
//       case  VIEW_HISTORY_SUCCESS:
//           return { loading : false ,
//             state :{
//               ...state,
//               viewHistory: action.payload
//            }
//             };
//       case VIEW_HISTORY_FAIL:
//           return { loading : false, error: action.payload}
//       default:
//           return state;
//   }
// }
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
export {viewHistoryReducer, removeOrderReducer}
