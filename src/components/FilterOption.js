import React from "react";
import { useHistory } from "react-router-dom";
import "./FilterOption.css";

function FilterOption({
  year,
  launch,
  landing,
  successfulLanding,
  successfulLaunch,
}) {
  const history = useHistory();

  const handleFilter = (filter) => {
    if (landing) {
      history.push({
        pathname: "/",
        search: `?successfulLanding=${filter}`,
      });
    } else if (launch) {
      history.push({
        pathname: "/",
        search: `?successfulLaunch=${filter}`,
      });
    } else {
      history.push({
        pathname: "/",
        search: `?filter=${filter}`,
      });
    }
  };

  return (
    <>
      <button
        onClick={() =>
          handleFilter(year || successfulLaunch || successfulLanding)
        }
        className="filterOption"
      >
        {year || successfulLaunch || successfulLanding}
      </button>
    </>
  );
}

export default FilterOption;
