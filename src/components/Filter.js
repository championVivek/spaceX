import React from "react";
import FilterOption from "./FilterOption";
import "./Filter.css";

function Filter() {

  //Filter option title
  const filterTitle = (title) => (
    <div className="filter__heading">
      <h5>{title}</h5>
      <hr style={{ width: "70%" }} />
    </div>
  );

  return (
    
    <div className="filter">
      <h3>Filters</h3>
      {filterTitle("Launch Year")}
      <div className="filter__options">
        <FilterOption year="2006" />
        <FilterOption year="2007" />
        <FilterOption year="2008" />
        <FilterOption year="2009" />
        <FilterOption year="2010" />
        <FilterOption year="2011" />
        <FilterOption year="2012" />
        <FilterOption year="2013" />
        <FilterOption year="2014" />
        <FilterOption year="2015" />
        <FilterOption year="2016" />
        <FilterOption year="2017" />
        <FilterOption year="2018" />
        <FilterOption year="2019" />
        <FilterOption year="2020" />
      </div>
      {filterTitle("Successful Launch")}
      <div className="filter__options">
        <FilterOption launch successfulLaunch="True" />
        <FilterOption launch successfulLaunch="False" />
      </div>
      {filterTitle("Successful Landing")}
      <div className="filter__options">
        <FilterOption landing successfulLanding="True" />
        <FilterOption landing successfulLanding="False" />
      </div>
    </div>
  );
}

export default Filter;
