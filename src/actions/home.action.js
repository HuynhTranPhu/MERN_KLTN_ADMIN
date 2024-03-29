import axios from "axios";
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, GET_ORDER_BY_CATEGORY_YEAR_FAIL, GET_ORDER_BY_CATEGORY_YEAR_REQUEST, GET_ORDER_BY_CATEGORY_YEAR_SUCCESS, GET_ORDER_BY_YEAR_FAIL, 
    GET_ORDER_BY_YEAR_REQUEST, 
    GET_ORDER_BY_YEAR_SUCCESS, 
    GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_FAIL, 
    GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_REQUEST, 
    GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_SUCCESS, 
    GET_PROFIT_BY_CATEGORY_YEAR_FAIL, 
    GET_PROFIT_BY_CATEGORY_YEAR_REQUEST, 
    GET_PROFIT_BY_CATEGORY_YEAR_SUCCESS, 
    GET_PROFIT_BY_YEAR_FAIL, 
    GET_PROFIT_BY_YEAR_REQUEST, 
    GET_PROFIT_BY_YEAR_SUCCESS, 
    GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_FAIL, 
    GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_REQUEST, 
    GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_SUCCESS, 
    GET_QUANTITY_ORDER_BY_YEAR_FAIL, 
    GET_QUANTITY_ORDER_BY_YEAR_REQUEST, 
    GET_QUANTITY_ORDER_BY_YEAR_SUCCESS,
    GET_SUB_TOTAL_BY_YEAR_FAIL,
    GET_SUB_TOTAL_BY_YEAR_REQUEST,
    GET_SUB_TOTAL_BY_YEAR_SUCCESS,
    PRODUCT_LIST_SELLING_FAIL,
    PRODUCT_LIST_SELLING_REQUEST,
    PRODUCT_LIST_SELLING_SUCCESS} from "../constants/action.types";


require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;

export const getOrderByYear = (year) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_ORDER_BY_YEAR_REQUEST });
      const {data} = await axios.get(`${url}/admin/order/byyear/${year}`);
        dispatch({
          type: GET_ORDER_BY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_ORDER_BY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getQuantityOfOrderByYear = (year) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_QUANTITY_ORDER_BY_YEAR_REQUEST });
      const {data} = await axios.get(`${url}/admin/order/quantitybyyear/${year}`);
        dispatch({
          type: GET_QUANTITY_ORDER_BY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_QUANTITY_ORDER_BY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getOrderSubTotalByYear = (year) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_SUB_TOTAL_BY_YEAR_REQUEST });
      const {data} = await axios.get(`${url}/admin/order/subtotal/${year}`);
        dispatch({
          type: GET_SUB_TOTAL_BY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_SUB_TOTAL_BY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getProFitByYear = (year) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_PROFIT_BY_YEAR_REQUEST });
      const {data} = await axios.get(`${url}/admin/order/profitbyyear/${year}`);
        dispatch({
          type: GET_PROFIT_BY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_PROFIT_BY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getOrderOfOrderByCategoryYear = (year, categoryName) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_ORDER_BY_CATEGORY_YEAR_REQUEST });
      const {data} = await axios.post(`${url}/admin/order/countorder`,{year, categoryName});
        dispatch({
          type: GET_ORDER_BY_CATEGORY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_ORDER_BY_CATEGORY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getQuantityOfOrderByCategoryYear = (year, categoryName) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_REQUEST });
      const {data} = await axios.post(`${url}/admin/order/yearandcategory`,{year, categoryName});
        dispatch({
          type: GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_QUANTITY_ORDER_BY_CATEGORY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getOrderSubTotalByCategoryYear = (year, categoryName) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_REQUEST });
      const {data} = await axios.post(`${url}/admin/order/subtotalcategory`,{year, categoryName});
        dispatch({
          type: GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_ORDER_SUBTOTAL_BY_CATEGORY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const getProFitByCategoryYear = (year, categoryName) => async (dispatch)=> {
   
    try {
      dispatch({ type: GET_PROFIT_BY_CATEGORY_YEAR_REQUEST });
      const {data} = await axios.post(`${url}/admin/order/profitbyyearandcategory`,{year, categoryName});
        dispatch({
          type: GET_PROFIT_BY_CATEGORY_YEAR_SUCCESS,
          payload: data.arrOr
        });
       
    } catch (error) {
      dispatch({
        type: GET_PROFIT_BY_CATEGORY_YEAR_FAIL,
        payload: error.message
      });
    }
};
export const listCategory = () => async (dispatch) =>{
  try{
      dispatch({type: CATEGORY_LIST_REQUEST});
       //const {data} =await axios.get("/api/products");
       const {data} = await axios.get(`${url}/categorys`);
      //console.log({data});
      dispatch({type: CATEGORY_LIST_SUCCESS, payload: data});
      
  }  
  catch(error){
      const message=
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      dispatch({type: CATEGORY_LIST_FAIL, payload: message});
  }

}
export const listProductsSelling = () => async (dispatch) =>{
  try{
      dispatch({type: PRODUCT_LIST_SELLING_REQUEST});
       const {data} = await axios.get(`${url}/product/banchay/top10quantity`);
      dispatch({type: PRODUCT_LIST_SELLING_SUCCESS, payload: data});
      
  }  
  catch(error){
      const message=
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      dispatch({type: PRODUCT_LIST_SELLING_FAIL, payload: message});
  }

}