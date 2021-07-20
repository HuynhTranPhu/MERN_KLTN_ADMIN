import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder, updateOrder, viewHistoryGet } from "../../actions/order.action";
import Card from "../../components/UI/Card/index";
import NavbarContainer from "../navbar.container";
import Slider from "../slider.container";
import LoadingBackdrop from "../../config/LoadingBackdrop";

import "./index.css";

/**
 * @author
 * @function Orders
 **/

const Orders = (props) => {
  
  const viewHistoryOder = useSelector((state) => state.viewHistoryOder);
  const {viewHistory,loading} = viewHistoryOder;
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const promotionPrice = viewHistory?.cart?.map(i=> i.price * i.quantity);

  const onOrderUpdate = (id_order) => {
    const payload = {
      id_order,
      type,
    };
    dispatch(updateOrder(payload));
  };
  const removeOrderHandler=(id_order)=>{
    if(window.confirm('Do you want to delete this item?')){
      dispatch(removeOrder(id_order));
      //props.history.push('/history');
  }
  }

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  useEffect(() => {
    dispatch(viewHistoryGet(props.match.params.id));
    //dispatch(viewHistoryGet(id_order));
  }
, [dispatch, props.match.params.id])

  return (
    <section id="container" className="">
    <NavbarContainer /> 
    <Slider />
        <Card 
          key={viewHistory?._id}
          headerLeft={"OrderId: "+viewHistory?._id?.substring(0, 14)}
        >
          <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 10px",
              marginLeft:"200px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="title">Items</div>
              {viewHistory?.cart?.map((item, index) => (
                <>
                  <div className="value" key={index}>
                    {item.name}<span className="title">({item.color.name},{item.size.name})</span> 
                  </div>
                  
                </>
                
              ))}
            </div>
            <div>
              <span className="title">Total Price</span>
              <br />
              <span className="value">{viewHistory?.order_subtotal} đ</span>
            </div>
            <div>
              <span className="title">Promotion Price</span>
              <br />
              <span className="value">{promotionPrice > viewHistory?.order_subtotal ? promotionPrice - viewHistory?.order_subtotal: 0 } đ</span>
            </div>
            <div>
              <span className="title">Payment Type</span> <br />
              <span className="value">{viewHistory?.payment}</span>
            </div>
            <div>
              <span className="title">Phone</span> <br />
              <span className="value">{viewHistory?.phone}</span>
            </div>
            <div>
              <span className="title">Address</span> <br />
              <span className="value">{viewHistory?.address}</span>
            </div>
            <div>
              <span className="title">Payment Status</span> <br />
              <span className="value">{viewHistory?.paymentStatus}</span>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              padding: "100px",
              display: "flex",
              marginLeft:"200px",
              alignItems: "center",
            }}
          >
            <div className="orderTrack">
              {viewHistory?.orderStatus?.map((status) => (
                <div
                  className={`orderStatus ${
                    status.isCompleted ? "active" : ""
                  }`}
                >
                  <div
                    className={`point ${status.isCompleted ? "active" : ""}`}
                  ></div>
                  <div className="orderInfo">
                    <div className="status">{status.type}</div>
                    <div className="date">{formatDate(status.date)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* select input to apply order action */}
            <div
              style={{
                marginLeft:"20px",
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <select className="form-select" onChange={(e) => setType(e.target.value)}>
                <option value={""}>select status</option>
                {viewHistory?.orderStatus?.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </>
                  );
                })}
              </select>
            </div>
            {/* button to confirm action */}

            <div>
              <button className="btn btn-primary" onClick={() => onOrderUpdate(viewHistory?._id)}>
                confirm
              </button>
            </div>
            <div>
              <button disabled={viewHistory?.orderStatus?.map(status=>status.isCompleted)[3]===true}  className="btn btn-primary cancel" onClick={() => removeOrderHandler(viewHistory?._id)}>
                Cancel 
              </button>
            </div>
          </div>
        </Card>
     
        <LoadingBackdrop open={loading}/>
    </section>
    
     
  );
};

export default Orders;

