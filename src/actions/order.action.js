import axios from "axios";
import { orderConstants,
  VIEW_HISTORY_REQUEST,
  VIEW_HISTORY_SUCCESS,
   VIEW_HISTORY_FAIL,
    REMOVE_ORDER_SUCCESS,
     REMOVE_ORDER_FAIL } from "../constants/action.types";

require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;

export const getCustomerOrders = () => async (dispatch)=> {
   
    try {
      dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
      const {data} = await axios.get(`${url}/order/all`);
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: data
        });
       
    } catch (error) {
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
        payload: error.message
      });
    }
};

export const updateOrder = (payload) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_REQUEST });
    try {
      const res = await axios.post(`${url}/order/update`, payload);
      if (res.status === 201) {
        dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_SUCCESS });
        dispatch(viewHistoryGet(payload.id_order));
      } else {
        const { error } = res.data;
        dispatch({
          type: orderConstants.UPDATE_CUSTOMER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const viewHistoryGet = (id_order) => async (dispatch) =>{
  try{
      dispatch({type: VIEW_HISTORY_REQUEST, payload: id_order});
      const {data} = await axios.get(`${url}/order/admindetail/`+id_order);
      dispatch({type: VIEW_HISTORY_SUCCESS, payload:data });
      //console.log(data);
  }
  catch(error){
      const message=
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      dispatch({type: VIEW_HISTORY_FAIL, payload: message})
  }
}
export const removeOrder = (id_order) => async (dispatch) =>{ 
  try{ 
     dispatch({type: REMOVE_ORDER_SUCCESS, payload:id_order});
    const {data} = await axios.put(`${url}/admin/order/`+id_order);
    dispatch(viewHistoryGet(id_order));
      
  }catch(error){
      const message=
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      dispatch({type:REMOVE_ORDER_FAIL,payload:message});
  }
}