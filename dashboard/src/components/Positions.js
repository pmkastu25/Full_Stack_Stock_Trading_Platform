import React,{useEffect, useState} from "react";

import axios from 'axios';

import { positions } from "../data/data.js"; //for initial dummy data entry

const Positions = () => {

  const [allPositions, setAllPositions] = useState([]);

  useEffect(()=>{
      axios.get("https://zerodha-clone-backend-2y8c.onrender.com/allPositions").then((res)=>{
        console.log(res.data);
        setAllPositions(res.data);
      })
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
           {allPositions.map((stock, index) => {
                      const curValue = stock.price * stock.qty;
                      const isprofit = curValue - stock.avg * stock.qty >= 0.0;
                      const profClass = isprofit ? "profit" : "loss";
                      const dayClass = stock.isLoss ? "loss" : "profit";
          
                      return (
                        <tr key={index}>
                          <td>{stock.product}</td>
                          <td>{stock.name}</td>
                          <td>{stock.qty}</td>
                          <td>{stock.avg.toFixed(2)}</td>
                          <td>{stock.price.toFixed(2)}</td>
                          <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                          <td className={dayClass}>{stock.day}</td>
                        </tr>
                      );
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
