import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
import LaunchDetails from "./LaunchDetails";
import axios from "../axios";
import Filter from "./Filter";
import "./Home.css";

function Home() {
  const [allLaunches, setAllLaunches] = useState([]);
  const location = useLocation();

  //Filter paramaters from URL
  const year = qs.parse(location.search, { ignoreQueryPrefix: true }).filter;
  const successfulLaunch = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).successfulLaunch;
  const successfulLanding = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).successfulLanding;


  //Get launches on page start
  useEffect(() => {
    getAllLaunches();
  }, [year, successfulLanding, successfulLaunch]);

  const getAllLaunches = async () => {
    var getLaunches = [];
    if (!year && !successfulLanding && !successfulLaunch) {
      getLaunches = await axios.get("launches?limit=100");
    } else if (successfulLaunch) {
      getLaunches = await axios.get(
        `launches?limit=100&launch_success=${successfulLaunch.toLowerCase()}`
      );
    } else if (successfulLanding) {
      getLaunches = await axios.get(
        `launches?limit=100&launch_success=true&land_success=${successfulLanding.toLowerCase()}`
      );
    } else {
      getLaunches = await axios.get(
        `launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
      );
    }
    setAllLaunches(getLaunches.data);
  };

  return (
    <div className="home">
      <h3>SpaceX Launch Programs</h3>
      <div className="home__container">
        <Filter />
        <div className="home__launches">
          {allLaunches.length !== 0 ? (
            allLaunches.map((allLaunch) => (
              <LaunchDetails
                key={allLaunch.flight_number}
                missionImage={allLaunch.links}
                missionId={allLaunch.mission_id}
                flightNumber={allLaunch.flight_number}
                missionName={allLaunch.mission_name}
                launchYear={allLaunch.launch_year}
                launchSuccess={allLaunch.launch_success}
                landSuccess={allLaunch.rocket.first_stage.cores[0].land_success}
              />
            ))
          ) : (
            <div className="home__launchesNotAvailable">
              NO LAUNCHES AVAILABLE
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
