import React from "react";
import { useNavigate } from "react-router-dom";

function LaunchTableRow(props) {
  const navigate = useNavigate();
  const launch = props.launch;
  const localLaunchClick = evt => {
    evt.stopPropagation();
    navigate(`${launch.flightNumber}`);
  };
  return (
    <tr>
      <td>
        <h5 className="font-14 my-1 fw-normal">{launch.missionName}</h5>
        <span className="text-muted font-13">{launch.launchYear}</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">{launch.launchDateUtc}</h5>
        <span className="text-muted font-13">Launch Date UTC</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">{launch.launchDateLocal}</h5>
        <span className="text-muted font-13">Launch Date Local</span>
      </td>
      <div>
        <button onClick={localLaunchClick}>
          VIEW
        </button>
      </div>
    </tr>
  );
}
export default LaunchTableRow;
