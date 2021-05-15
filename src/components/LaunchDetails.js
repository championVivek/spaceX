import React from "react";
import "./LaunchDetails.css";

function LaunchDetails({
  flightNumber,
  missionImage,
  missionName,
  missionId,
  launchYear,
  launchSuccess,
  landSuccess,
}) {
  return (
    <div className="launchDetails">
      <div className="launchDetails__image">
        <img src={missionImage.mission_patch} alt={missionName} />
      </div>
      <div className="launchDetails__container">
        <div className="launchDetails__name">
          {missionName} #{flightNumber}
        </div>
        <div className="launchDetails__missionid">
          <h6>Mission Ids:</h6>
          <span>{missionId != 0 ? <li>{missionId}</li> : null}</span>
        </div>
        <div className="launchDetails__year">
          <h6>
            Launch Year: <span>{launchYear}</span>
          </h6>
        </div>
        <div className="launchDetails__status">
          <h6>
            Successful Launch: <span>{launchSuccess.toString()}</span>{" "}
          </h6>
        </div>
        <div className="launchDetails__status">
          <h6>
            Successful Landing:{" "}
            <span>
              {landSuccess !== null ? <>{landSuccess.toString()}</> : null}
            </span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LaunchDetails;
