import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../actions/home.action";
import { updatePriceByCategory } from "../../actions/product.action";
import NavbarContainer from "../navbar.container";
import Slider from "../slider.container";
import { toast } from 'react-toastify';

import "./index.css";

/**
 * @author
 * @function Orders
 **/

const Promotion = (props) => {
  const categories = useSelector(state => state.categoryList);
  const {category} = categories;

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch])


  const [categoryName, setCategoryName]= useState('');
  const [discount, setDiscount]= useState(0);
  
  const handleSelect = (e) =>{
    setCategoryName(e.target.value)
  }
  const handleDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  const handleIn = () =>{
    dispatch(updatePriceByCategory(categoryName,discount,true));
    toast.success('Update price increase success');
  }
  const handleDe = () =>{
    dispatch(updatePriceByCategory(categoryName,discount,false));
    toast.success('Update price decrease success');
  }
  return (
    <section id="container" className="">
    <NavbarContainer /> 
    <Slider />
    <div className="promotion">
        <div className="promotion__category">
                <select className="form-select" onChange={handleSelect}>
                    <option selected value="">Select category</option>
                    {
                        category?.map(category => (
                            <option value={category.name} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
        </div>
        <div className="promotion__input">
              <h6 className="promotion__input-text">Number decrease or increase</h6>
               <input 
                type="number"
                className="form-control"
                  onChange={handleDiscount}
               />
        </div>
        <div className="promotion__increase">
              <button className="btn btn-primary" onClick={handleIn}>Increase</button>
        </div>
        <div className="promotion__decrease">
              <button className="btn btn-primary" onClick={handleDe}>Decrease</button>
        </div>
    </div>
    
    
    
    </section>
    
     
  );
};

export default Promotion;

