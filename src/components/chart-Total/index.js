import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { 
        getOrderSubTotalByCategoryYear,
        getOrderSubTotalByYear,
        listCategory } 
from '../../actions/home.action';
import './index.css';

const ChartTotal = () => {


    const getOrderSubtotal = useSelector((state) => state.getOrderSubtotal);
    
    const getOrderSubTotalByCategoryYears = useSelector((state) => state.getOrderSubTotalByCategoryYears);

    const categories = useSelector(state => state.categoryList);
    const {category} = categories;

    const [year,setYear]= useState(0);

    const dispatch = useDispatch()
    console.log(getOrderSubtotal)
    const handleSelect= (e)=>{
        dispatch(getOrderSubTotalByYear(e.target.value));
        setYear(e.target.value);
        
    }
    const handleSelectCate= (e)=>{
        dispatch(getOrderSubTotalByCategoryYear(year,e.target.value));
    }
    useEffect(() => {
        dispatch(listCategory());
        dispatch(getOrderSubTotalByYear(2021));
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
                            label: 'Total revenue(VND)',
                            //data: getOrderSubtotal.arrOrderSubTotal,
                            data: getOrderSubTotalByCategoryYears?.arrCategoryOrderSubTotal?.length > 0 ?getOrderSubTotalByCategoryYears.arrCategoryOrderSubTotal:
                            getOrderSubtotal.arrOrderSubTotal,
                            backgroundColor: [
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(153, 102, 255, 0.6)'
                                
                            ],
                            borderColor: [
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(153, 102, 255, 1)'
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

export default ChartTotal;