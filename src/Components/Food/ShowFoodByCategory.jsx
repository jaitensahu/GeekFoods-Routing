import React, { useState, useEffect } from "react";
import { Store } from "../DataStore/Datastore";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShowFoodShimmer from "./ShowFoodShimmer";

const ShowFoodByCategory = () => {
  window.scroll(0,0)
//   let { category } = useContext(Store);
    let [category, setCategory] = useState([]);
    let params = useParams();
    console.log(params.category);
    useEffect(() => {
        getFoodCategory(params.category);
    },[])
     async function getFoodCategory(category) {
       console.log(category);
       let res = await axios.get(
         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
       );
       setCategory(res.data.meals);
       console.log(res.data.meals);
     }


  return (
    <>
      {category.length == 0 && <ShowFoodShimmer />}
      <div className="categoryFoodContainer">
        {category.map((Food) => {
          return (
            <div>
              <div className="imagebyCategory">
                <img className="foodIMg" src={Food.strMealThumb} alt="" />
              </div>
              <div className="viewDetails">
                <h2>{Food.strMeal}</h2>
                <button className="viewDetailsBtn">View Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowFoodByCategory;
