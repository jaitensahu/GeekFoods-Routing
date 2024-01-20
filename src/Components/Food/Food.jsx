import React, { useContext, useEffect, useState } from "react";
import Header from "../Home/Header";
import axios from "axios";
import './Food.css'
import { FaSearch } from "react-icons/fa";
import { Store } from "../DataStore/Datastore";
import ShowFoodByCategory from "./ShowFoodByCategory";
import { Link } from "react-router-dom";
import FoodShimmer from "./FoodShimmer";

const Restaurants = () => {
  const [foodArray, setFoodArray] = useState([]);
  const { getFoodCategory } = useContext(Store)
  useEffect(() => {
    getDataFromApi();
  },[]);
  async function getDataFromApi() {
    let response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    // console.log(response.data.categories);
    setFoodArray(response.data.categories);
  }
  if (foodArray.length == 0) {
    return <FoodShimmer />;
  }

  return (
    <>
      
      <div className="foodCardContainer">
        <div className="heroContainer">
          <div className="heroImage">
            <img
              src="https://www.fabhotels.com/blog/wp-content/uploads/2022/07/1400x600-Food-Banner.jpg"
              alt=""
            />
          </div>
          <div className="searchFood">
            <input type="text" placeholder="What you Wanna eat today...?" />
            <FaSearch />
          </div>
        </div>{" "}
        {foodArray.map((food) => {
          return (
            <Link to={"/food/" + food.strCategory}>
              <div
                className="foodCard"
                id={food.idCategory}
                key={food.idCategory}
              >
                <div className="image">
                  <img src={food.strCategoryThumb} alt="" />
                </div>
                <h6 className="categories">{food.strCategory}</h6>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Restaurants;
