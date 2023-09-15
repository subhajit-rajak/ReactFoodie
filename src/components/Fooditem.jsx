import React, { useState } from "react";
import Food from "./Food";

const Fooditem = () => {
  const [data,setItems] = useState(Food);

  const filterItem=(cateItem) =>{
    const updateItem = Food.filter((currElem)=>{
        return currElem.category===cateItem;
    });
    setItems(updateItem);
  }
  
  return (
    <>
      <div className="container-fluid">
        <h4 className="text-center pt-3">All Food Menu</h4><hr></hr>
        <div className="row">
          <div className="col-12 d-flex justify-content-center menu-btn">
            <button className="btn btn-warning"onClick={() =>setItems(Food)}>All Food</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Fast Food')}>Fast Food</button>
            <button className="btn btn-warning"onClick={() =>filterItem('BreakFast')}>BreakFast</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Lunch')}>Lunch</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Dinner')}>Dinner</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Veg')}>Veg</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Non Veg')}>Non Veg</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Tea')}>Tea</button>
            <button className="btn btn-warning"onClick={() =>filterItem('Coffee')}>Coffee</button>
          </div>
        </div>
        <div className="row mt-4">
          {data.map((elem) => {
            const { name, img, category, price } = elem;
            return (
              <div className="col-12 col-md-3" key={name}>
                <div className="card1">
                  <div className="card1-left">
                    <img src={img} alt={img} height={"120px"} width={"100%"} />
                  </div>
                  <div className="card1-right">
                    <h3>{name}</h3>
                    <span>{category}</span>
                    <div className="btn d-flex">
                      <h6>Price: {price}</h6>
                      <button className="badge badge-success">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fooditem;
