import React from 'react'
import './Foodshimmer.css'
const ShowFoodShimmer = () => {
    let arr = new Array(12)
    arr.fill(1)
    console.log(arr);
    
  return (
    <div className="categoryFoodContainer">
      {arr.map((Food) => {
        return (
          <div className='shimmer shimmer2'>
            <div className="imagebyCategory">
              {/* <img className="foodIMg" src={Food.strMealThumb} alt="" /> */}
            </div>
            <div className="viewDetails">
              {/* <h2>{Food.strMeal}</h2> */}
              {/* <button className="viewDetailsBtn"></button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowFoodShimmer
