import React, {  useState, useEffect } from "react";
import launchServices from "../services/launchServices";
import LaunchProfileBox from "../components/LaunchProfileBox";
import LaunchSite from "../components/LaunchSite";
import Rocket from "../components/Rocket";
import Links from "../components/Links";

function LaunchProfile(props) {
  const launchId = props.launchId;
  const [launch, setLaunch] = useState({
    missionName: "",
    launchYear: "",
    launchDateUtc: "",
    launchDateLocal: "",
  });
  const onGetLaunchSuccess = (response) => {
    let newLaunch = response.data.item;
    setLaunch(newLaunch)
  };
  const onGetLaunchFailure = (err) => console.warn(err);
  useEffect(()=>{
    launchServices
      .getLaunchById(launchId)
      .then(onGetLaunchSuccess)
      .catch(onGetLaunchFailure)
},[]);
  return (
    <>
      <LaunchProfileBox launch={launch} />
      <LaunchSite launchSite={launch.launchSite}/>
      <Rocket rocket={launch.rocket}/>
      <Links launch={launch} />
    </>
  );
}
export default LaunchProfile;


