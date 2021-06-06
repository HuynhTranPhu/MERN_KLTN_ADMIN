import axios from 'axios'
import { productTypes, PRODUCT_LIST_SUCCESS, UPDATE_PRICE_BY_CATEGORY_FAIL, UPDATE_PRICE_BY_CATEGORY_REQUEST, UPDATE_PRICE_BY_CATEGORY_SUCCESS } from '../constants/action.types'



require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;
//product
export const getProduct = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get(`${url}/admin/getallproduct/` + getState().productReducers.product.page)
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setProduct(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const getAllColor = () => async (dispatch) => {
    let res
    try {
        res = await axios.get(`${url}/color/getcolors` )
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setAllColor(res.data.data))
    //console.log(res.data.data)
    
}
export const getAllSize = () => async (dispatch) => {
    let res
    try {
        res = await axios.get(`${url}/size/getsizes` )
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setAllSize(res.data.sizes))
    //console.log(res.data.data)
    
}
export const listProducts = () => async (dispatch) =>{
    try{
         const {data} = await axios.get(`${url}/products`);
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        
    }

}
export const deleteProduct = (id) => async(dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.patch(`${url}/admin/deleteproduct/` +id)
    }
    catch (err) {
        //console.log(err)
        return
    }
    //console.log(res)
    dispatch(getProduct())
}
export const addProduct = (id_category, name,color,size,quantity, price, description, id_brand, files) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('files', files)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('colorProduct',JSON.stringify(color)) 
    data.append('sizeProduct', JSON.stringify(size)) 
    data.append('quantity', quantity) 
    data.append('price', price)  
    data.append('description', description)
    data.append('id_brand', id_brand)
    //let res
    console.log(data)
    try {
        //res = 
        await axios.post(`${url}/admin/addproduct`, data)
    }
    catch(err) {
        dispatch(addProductFail())
        return
    } 
    dispatch(addProductSuccess())
    dispatch(getProduct())
}
export const updateProduct = (id, name, color, size, quantity, id_category, price, description, id_brand, files, status) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('files', files)
    data.append('id', id)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('colorProduct', JSON.stringify(color)) 
    data.append('sizeProduct', JSON.stringify(size)) 
    data.append('quantity', quantity) 
    data.append('price', price)  
    data.append('description', description)
    data.append('id_brand', id_brand)
    data.append('status', status)
    //let res
    try {
        //res = 
        await axios.patch(`${url}/admin/updateproduct`, data)
    }
    catch(err) {
        dispatch(updateProductFail())
        return
    } 
    dispatch(updateProductSuccess())
    dispatch(getProduct())
}

export const setProduct = (data) => ({
    type: productTypes.SET_PRODUCT,
    data
})

export const setAllColor = (color) => ({
    type: productTypes.SET_ALL_COLOR,
    color
})
export const setAllSize = (size) => ({
    type: productTypes.SET_ALL_SIZE,
    size
})


export const setPage = (page) => ({
    type: productTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: productTypes.SET_TOTAL_PAGE,
    totalpage
})
export const brandSetPage = (page) => ({
    type: productTypes.BRAND_SET_PAGE,
    page
})
export const brandSetTotalPage = (totalpage) => ({
    type: productTypes.BRAND_SET_TOTAL_PAGE,
    totalpage
})
export const colorSetPage = (page) => ({
    type: productTypes.COLOR_SET_PAGE,
    page
})
export const colorSetTotalPage = (totalpage) => ({
    type: productTypes.COLOR_SET_TOTAL_PAGE,
    totalpage
})
//size
export const sizeSetPage = (page) => ({
    type: productTypes.SIZE_SET_PAGE,
    page
})
export const sizeSetTotalPage = (totalpage) => ({
    type: productTypes.SIZE_SET_TOTAL_PAGE,
    totalpage
})
export const categorySetPage = (page) => ({
    type: productTypes.CATEGORY_SET_PAGE,
    page
})
export const categorySetTotalPage = (totalpage) => ({
    type: productTypes.CATEGORY_SET_TOTAL_PAGE,
    totalpage
})



export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get(`${url}/admin/getallcategory/` + getState().productReducers.category.page)
    }
    catch (err) {
        return
    }
    dispatch(setCategory(res.data.data))
    dispatch(categorySetTotalPage(res.data.totalPage))
}
export const getAllCategory = () => async (dispatch) =>  {
    let res
    try {
        res = await axios.get(`${url}/categorys`)
    }
    catch (err) {
        return
    }
    dispatch(setAllCategory(res.data.data))
}



export const getBrand = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get(`${url}/admin/getallbrand/` + getState().productReducers.brand.page)
    }
    catch(err) {
        return
    }
    dispatch(setBrand(res.data.data))
    dispatch(brandSetTotalPage(res.data.totalPage))
}
export const getAllBrand = () => async (dispatch) => {
    let res
    try {
        res = await axios.get(`${url}/brands`)
    }
    catch(err) {
        return
    }
    dispatch(setAllBrand(res.data.data))
}
export const getColor = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get(`${url}/admin/getcolors/` + getState().productReducers.color.page)
    }
    catch(err) {
        return
    }
    dispatch(setColor(res.data.data))
    dispatch(colorSetTotalPage(res.data.totalPage))
}
//size
export const getSize = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get(`${url}/admin/getsizes/` + getState().productReducers.size.page)
    }
    catch(err) {
        return
    }
    dispatch(setSize(res.data.data))
    dispatch(sizeSetTotalPage(res.data.totalPage))
}

export const setCategory = (data) => ({
    type: productTypes.SET_CATEGORY_PRODUCT,
    data
})
export const setAllCategory = (data) => ({
    type: productTypes.SET_ALL_CATEGORY_PRODUCT,
    data
})


export const setBrand = (data) => ({
    type: productTypes.SET_BRAND,
    data
})
export const setAllBrand = (data) => ({
    type: productTypes.SET_ALL_BRAND,
    data
})
export const setColor = (data) => ({
    type: productTypes.SET_COLOR,
    data
})
export const setSize = (data) => ({
    type: productTypes.SET_SIZE,
    data
})
export const addCategorySuccess = () =>({
    type: productTypes.ADD_CATEGORY_SUCCESS
})
export const addCategotyFail = () => ({
    type: productTypes.ADD_CATEGORY_FAIL
})
export const updateCategorySuccess = () => ({
    type: productTypes.UPDATE_CATEGORY_SUCCESS
})
export const updateCategoryFail = () => ({
    type: productTypes.UPDATE_CATEGORY_FAIL
})
export const resetCategory = () => ({
    type: productTypes.RESET_CATEGORY
})
export const addCategory =  (name, path) => async (dispatch, getState) => {
    dispatch(resetCategory())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addcategory`, {
            name: name,
            path: path
        })
    }
    catch(err) {
        dispatch(addCategotyFail())
        return
    } 
    dispatch(addCategorySuccess())
    dispatch(getCategory())
}

export const updateCategory =  (id, name, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatecategory`, {
            id: id,
            name: name,
            status:status
        })
    }
    catch(err) {
        dispatch(updateCategoryFail())
        return
    } 
    dispatch(updateCategorySuccess())
    dispatch(getCategory())
}
export const addBrandSuccess = () =>({
    type: productTypes.ADD_BRAND_SUCCESS
})
export const addBrandFail = () => ({
    type: productTypes.ADD_BRAND_FAIL
})
export const updateBrandSuccess = () => ({
    type: productTypes.UPDATE_BRAND_SUCCESS
})
export const updateBrandFail = () => ({
    type: productTypes.UPDATE_BRAND_FAIL
})
export const resetBrand = () => ({
    type: productTypes.RESET_BRAND
})
//color
export const addColorSuccess = () =>({
    type: productTypes.ADD_COLOR_SUCCESS
})
export const addColorFail = () => ({
    type: productTypes.ADD_COLOR_FAIL
})
export const updateColorSuccess = () => ({
    type: productTypes.UPDATE_COLOR_SUCCESS
})
export const updateColorFail = () => ({
    type: productTypes.UPDATE_COLOR_FAIL
})
export const resetColor = () => ({
    type: productTypes.RESET_COLOR
})
//size
export const addSizeSuccess = () =>({
    type: productTypes.ADD_SIZE_SUCCESS
})
export const addSizeFail = () => ({
    type: productTypes.ADD_SIZE_FAIL
})
export const updateSizeSuccess = () => ({
    type: productTypes.UPDATE_SIZE_SUCCESS
})
export const updateSizeFail = () => ({
    type: productTypes.UPDATE_SIZE_FAIL
})
export const resetSize = () => ({
    type: productTypes.RESET_SIZE
})
export const addBrand =  (name) => async (dispatch, getState) => {
    dispatch(resetBrand())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addbrand`, {
            name: name
        })
    }
    catch(err) {
        dispatch(addBrandFail())
        return
    } 
    dispatch(addBrandSuccess())
    dispatch(getBrand())
}

export const updateBrand =  (id, name, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatebrand`, {
            id: id,
            name: name,
            status:status
        })
    }
    catch(err) {
        dispatch(updateBrandFail())
        return
    } 
    dispatch(updateBrandSuccess())
    dispatch(getBrand())
}
//color
export const addColor =  (name, description) => async (dispatch, getState) => {
    dispatch(resetColor())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addcolor`, {
            name: name,
            description:description
        })
    }
    catch(err) {
        dispatch(addColorFail())
        return
    } 
    dispatch(addColorSuccess())
    dispatch(getColor())
}

export const updateColor =  (id, name,description, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatecolor`, {
            id: id,
            name: name,
            description:description,
            status:status
        })
    }
    catch(err) {
        dispatch(updateColorFail())
        return
    } 
    dispatch(updateColorSuccess())
    dispatch(getColor())
}
//size
export const addSize =  (name, description) => async (dispatch, getState) => {
    dispatch(resetSize())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addsize`, {
            name: name,
            description:description
        })
    }
    catch(err) {
        dispatch(addSizeFail())
        return
    } 
    dispatch(addSizeSuccess())
    dispatch(getSize())
}

export const updateSize =  (id, name,description, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatesize`, {
            id: id,
            name: name,
            description:description,
            status:status
        })
    }
    catch(err) {
        dispatch(updateSizeFail())
        return
    } 
    dispatch(updateSizeSuccess())
    dispatch(getSize())
}
export const backPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    let totalpage = getState().productReducers.product.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const brandBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(brandSetPage(parseInt(page) - 1))
    }
}

export const brandNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.brand.page
    let totalpage = getState().productReducers.brand.totalpage
    if(page < totalpage) {
        dispatch(brandSetPage(parseInt(page) + 1))
    }
}
//color
// export const colorNextPage = () => (dispatch, getState) => {
//     let page = getState().productReducers.color.page
//     let totalpage = getState().productReducers.color.totalpage
//     if(page < totalpage) {
//         dispatch(setPage(parseInt(page) + 1))
//     }
// }
export const colorBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(colorSetPage(parseInt(page) - 1))
    }
}

export const colorNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.color.page
    let totalpage = getState().productReducers.color.totalpage
    if(page < totalpage) {
        dispatch(colorSetPage(parseInt(page) + 1))
    }
}
//size
export const sizeBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(sizeSetPage(parseInt(page) - 1))
    }
}

export const sizeNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.size.page
    let totalpage = getState().productReducers.size.totalpage
    if(page < totalpage) {
        dispatch(sizeSetPage(parseInt(page) + 1))
    }
}
//category
export const categoryBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.category.page
    if(page > 1) {
        dispatch(categorySetPage(parseInt(page) - 1))
    }
}

export const categoryNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.category.page
    let totalpage = getState().productReducers.category.totalpage
    if(page < totalpage) {
        dispatch(categorySetPage(parseInt(page) + 1))
    }
}

export const orderBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.order.page
    if(page > 1) {
        dispatch(orderSetPage(parseInt(page) - 1))
    }
}

export const orderNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.order.page
    let totalpage = getState().productReducers.order.totalpage
    if(page < totalpage) {
        dispatch(orderSetPage(parseInt(page) + 1))
    }
}
export const addProductSuccess = () => ({
    type: productTypes.ADD_PRODUCT_SUCCESS
})
export const addProductFail = () => ({
    type: productTypes.ADD_PRODUCT_FAIL
})
export const updateProductSuccess = () => ({
    type: productTypes.UPDATE_PRODUCT_SUCCESS
})
export const updateProductFail = () => ({
    type: productTypes.UPDATE_PRODUCT_FAIL
})

export const setOrder = (data) => ({
    type: productTypes.ORDER_SET_DATA,
    data
})
export const setOrderById = (data) => ({
    type: productTypes.ORDER_SET_DATA_BY_ID,
    data
})
export const orderSetPage = (page) => ({
    type: productTypes.ORDER_SET_PAGE,
    page
})
export const orderSetTotalPage = (totalpage) => ({
    type: productTypes.ORDER_SET_TOTAL_PAGE,
    totalpage
})

export const updatePriceByCategory = (categoryName,disCount, increase) => async (dispatch)=> {
   
    try {
      dispatch({ type: UPDATE_PRICE_BY_CATEGORY_REQUEST });
      const {data} = await axios.post(`${url}/admin/product/updateprice`,{categoryName,disCount, increase});
        dispatch({
          type: UPDATE_PRICE_BY_CATEGORY_SUCCESS,
          payload: data
        });
       
    } catch (error) {
      dispatch({
        type: UPDATE_PRICE_BY_CATEGORY_FAIL,
        payload: error.message
      });
    }
};
