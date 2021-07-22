import React, { useEffect } from 'react';
//import Slider from '../../containers/slider.container';
//import NavbarContainer from '../../containers/navbar.container';
import { useDispatch, useSelector } from 'react-redux';
import { viewHistoryGet } from '../../actions/order.action';
//import Orders from '../OrderContainer/order.container';
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

const Bill = (props) => {

    const viewHistoryOder = useSelector((state) => state.viewHistoryOder);
    const {viewHistory} = viewHistoryOder;
    //console.log(viewHistory);
    const promotionPrice = viewHistory?.cart?.map(i=> i.price * i.quantity);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(viewHistoryGet(props.match.params.id));
      }
    , [dispatch, props.match.params.id])
    let min = 1;
    let max = 999999;
    let rand =   Math.floor(min + (Math.random() * (max-min)));
    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    const printPDF = async () => {
        const domElement = document.getElementById("print-bill");
        html2canvas(domElement, {
            onclone: document => {
                document.getElementById("print");
            }
        }).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPdf();
            //pdf.addImage(imgData, "JPEG", 0,0,100,20);
            pdf.addImage(imgData, "JPEG", 20,0);
            pdf.save(`${new Date().toISOString()}.pdf`);
        });
    };
    return (
        <div>
            <button className="btn-primary float-end print__pdf" id="print" onClick={printPDF}> PRINT</button>  

            <div className="invoice-box" style={{paddingTop: "100px"}}id='print-bill'  >
                <table cellPadding={0} cellSpacing={0} >
                            <tbody  >
                                <tr className="top">
                                    <td colSpan={2}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="title">
                                                        <img src="/img/logo.png" style={{width: '100%', maxWidth: 180}} alt=""/>
                                                    </td>
                                                    <td>
                                                        Invoice :{rand}<br />
                                                        Created: {getCurrentDate()}<br />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="information">
                                    <td colSpan={2}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Delivery Address:<br />
                                                        { viewHistory?.address}<br />
                                                        Order date: {viewHistory?.order_date?.substring(0, 10)}
                                                    </td>
                                                    <td>
                                                        Phone:{viewHistory?.phone}<br />
                                                        Name:{viewHistory?.name}<br />
                                                        Emai:{viewHistory?.email}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="heading">
                                    <td className="fw-bold">
                                        Payment Method
                                    </td>
                                    <td>
                                        {viewHistory?.payment}
                                    </td>
                                </tr>
                                <tr className="heading">
                                    <td className="fw-bold">
                                        Item
                                    </td>
                                    <td className="fw-bold">
                                        Price
                                    </td>
                                </tr>
                                {
                                    viewHistory?.cart?.map(i=>
                                        <tr className="item">
                                            <td>
                                                {i.name}({i.quantity})
                                            </td>
                                            
                                            <td >
                                                {i.price * i.quantity} đ
                                            </td>
                                        </tr>)
                                }
                                <tr className="detail">
                                    <td className="fw-bold">
                                        Shipping Cost
                                    </td>
                                    <td>
                                    {viewHistory?.shiping} đ
                                    </td>
                                </tr>
                                <tr className="detail">
                                    <td className="fw-bold">
                                        Promotion
                                    </td>
                                    <td>
                                        {promotionPrice > viewHistory?.order_subtotal ?
                                         promotionPrice - viewHistory?.order_subtotal: 0
                                        } đ
                                    </td>
                                </tr>
                                <tr className="total">
                                    <td />
                                    <td>
                                        Total {viewHistory?.order_subtotal} đ
                                    </td>
                                </tr>
                            </tbody>
                    </table>
            
        </div>
               
             
               
    </div>   
      
    );
};

export default Bill;