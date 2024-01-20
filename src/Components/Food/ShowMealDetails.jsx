import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowMealDetails = () => {
    let [meal, setmeal] = useState({});
    let param = useParams()
    console.log(param.id);
    useEffect(() => {
       getMealDetailById(param.id)
    }, [])
    async function getMealDetailById(mealID) {
        // console.log(mealID.data);
         let response = await axios.get(
           `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
         );
        console.log(response.data.meals[0]);
        setmeal(response.data.meals[0]);
    }

  return (
    <div className="mealDetails">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt="" />
      <video src={meal.strYoutube}></video>
    </div>
  );
}

export default ShowMealDetails
