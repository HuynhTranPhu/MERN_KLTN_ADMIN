import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByYear,
        getOrderOfOrderByCategoryYear,
        getQuantityOfOrderByCategoryYear, 
        getQuantityOfOrderByYear, 
        listCategory } 
from '../../actions/home.action';
import './index.css';

const Char = () => {
    const getOrderByYears = useSelector((state) => state.getOrderByYears);
    const getQuantityOrder = useSelector((state) => state.getQuantityOrder);


    const getQuantityOrderByCategoryYears = useSelector((state) => state.getQuantityOrderByCategoryYears);
    const getOrderByCategoryYears = useSelector((state) => state.getOrderByCategoryYears);
   

    const categories = useSelector(state => state.categoryList);
    const {category} = categories;

    const [year,setYear]= useState(0);

    const dispatch = useDispatch()
    
    const handleSelect= (e)=>{
        dispatch(getOrderByYear(e.target.value));
        dispatch(getQuantityOfOrderByYear(e.target.value));
       
        setYear(e.target.value);
        
    }
    const handleSelectCate= (e)=>{
        dispatch(getQuantityOfOrderByCategoryYear(year,e.target.value));
        dispatch(getOrderOfOrderByCategoryYear(year,e.target.value));
       
    }
    useEffect(() => {
        dispatch(listCategory());
        dispatch(getOrderByYear(2021));
        dispatch(getQuantityOfOrderByYear(2021));
        
    }, [dispatch])
    

    return (
        <div >
            <div className="select__option">
                <h6>Select year</h6>
                <select className="form-select" onChange={handleSelect}>
                    <option
                        value="2021"
                        disabled
                        selected 
                        style={{ display: "none" }}
                    >
                        Select year
                    </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
                <h6 className="select__cate">Select Category</h6>
                {/* <select onChange={handleSelectCate}>
                    <option
                        value="2021"
                        disabled
                        selected 
                        style={{ display: "none" }}
                    >
                        Select category
                    </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select> */}
                <select disabled={year===0} className="form-select" onChange={handleSelectCate}>
                    <option value="">Select category</option>
                    {
                        category?.map(category => (
                            <option value={category.name} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            
            <Bar
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','November','December'],
                    datasets:[
                        {
                            label: 'Orders',
                            data: getOrderByCategoryYears?.arrCategoryOrder?.length >0 ?getOrderByCategoryYears.arrCategoryOrder:
                            getOrderByYears.arrOrder,
                            backgroundColor: [
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)',
                                'rgba(247, 202, 24, 0.8)'
                            ],
                            borderColor: [
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)',
                                'rgba(247, 202, 24, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Quantity',
                            data: getQuantityOrderByCategoryYears?.quantityCategoryOrder?.length > 0?getQuantityOrderByCategoryYears.quantityCategoryOrder:
                            getQuantityOrder.quantityOrder,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                               
                               
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(54, 162, 235, 1)',
                                
                            ],
                            borderWidth: 1
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio:false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    );
};

export default Char;