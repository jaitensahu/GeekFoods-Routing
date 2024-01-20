import Header from "../Home/Header";
import Input from './Input/input';
import restroData from "./data.json";
import { useState } from "react";
import Card from './header/Cards/Cards'
import "./Restaurants.css";

const Food = () => {
  window.scroll(0, 0);
    const [updatedData, setUpdateData] = useState([...restroData]);
    const [searchInput, setSearchInput] = useState();
    const [ratingInput, setRatingInput] = useState();

    // Getting Search Input from input component
    function getSearchInput(searchInput) {
      // setting searchInput to searchInput variable
      setSearchInput(searchInput);

      if (searchInput !== "") {
        // Function call for filtering out data
        filterData(searchInput, ratingInput);
        setUpdateData([...filteredData]);
      } else {
        setUpdateData([...restroData]);
      }
    }

    // Getting Rating Input from input component
    function getRatingInput(ratingInput) {
      // setting rating to ratingInput variable
      setRatingInput(ratingInput);
      if (ratingInput > 0) {
        // Function call for filtering out data
        filterData(searchInput, ratingInput);
        setUpdateData([...filteredData]);
      } else {
        setUpdateData([...restroData]);
      }
    }
    let filteredData = [];
    // Filtering Data according to searchInput and Rating Input
    function filterData(searchInput = "", ratingInput = 0) {
      filteredData = restroData.filter((ele) => {
        return (
          ele.rating >= ratingInput &&
          ele.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    }

    return (
      <div className="App">
        <Header />
        <Input
          getSearchInput={getSearchInput}
          getRatingInput={getRatingInput}
        />
        <div className="allCards">
          {updatedData.map((data) => {
            return <Card key={data._id["$oid"]} {...data} />;
          })}
        </div>
      </div>
    );
}

export default Food