import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import launchServices from "../services/launchServices";
import LaunchTableRow from "../components/LaunchTableRow";
import LaunchProfile from "./LaunchProfile";
import LaunchPagination from "../components/LaunchPagination";

function Launches() {
  const { pageId } = useParams();
  const [launches, setLaunches] = useState({
    launchData: { launchArr: [], pastComponents: [], futureComponents: [] },
    currentPage: 1,
    totalPages: 0,
    toggle: 1,
  });
  useEffect(() => {
    fetchLaunches(launches.currentPage);
  }, [launches.currentPage]);

  const fetchLaunches = (page) => {
    const limit = 20;
    const offset = (page - 1) * limit;

    launchServices
      .getFutureLaunches(limit, offset)
      .then(onGetFutureLaunchSuccess)
      .catch(onGetLaunchFailure);

    launchServices
      .getPastLaunches(limit, offset)
      .then(onGetPastLaunchSuccess)
      .catch(onGetLaunchFailure);
  };
  const onGetFutureLaunchSuccess = (response) => {
    let newArr = response.data;
    const totalLaunches = response.headers["spacex-api-count"];

    setLaunches((prevState) => {
      const pd = { ...prevState };
      pd.launchArr = newArr;
      pd.totalLaunches = totalLaunches;
      pd.futureComponents = pd.launchArr.map(mapLaunch);
      return pd;
    });
  };
  const onGetPastLaunchSuccess = (response) => {
    let newArr = response.data;
    const totalLaunches = response.headers["spacex-api-count"];

    setLaunches((prevState) => {
      const pd = { ...prevState };
      pd.launchArr = newArr;
      pd.totalLaunches = totalLaunches;
      pd.pastComponents = pd.launchArr.map(mapLaunch);
      return pd;
    });
  };
  const onToggleClick = () => {
    setLaunches((prevState) => ({
      ...prevState,
      toggle: !prevState.toggle,
    }));
  };
  const mapLaunch = (aLaunch, index) => {
    return (
      <LaunchTableRow launch={aLaunch} key={`${aLaunch.flightNumber}${index}`} />
    );
  };

  const handlePageChange = (pageNumber) => {
    setLaunches((prevState) => {
      const pd = { ...prevState };
      pd.currentPage = pageNumber;
      return pd;
    });
  };
  const onGetLaunchFailure = (err) => console.warn(err);

  return pageId ? (
    <LaunchProfile launchId={pageId} />
  ) : (
    <Card>
      <Card.Body>
        <LaunchPagination
          currentPage={launches.currentPage}
          onPageChange={handlePageChange}
          totalPages={launches.totalPages}
        />
        <button onClick={onToggleClick}>
          {launches.toggle ? "Past Launches" : "Future Launches"}
        </button>
        <h4 className="header-title mt-2 mb-3">
          {launches.toggle ? "Past Launches" : "Future Launches"}
        </h4>
        <Table hover responsive className="mb-0">
          <tbody>
            {launches.toggle
              ? launches.pastComponents
              : launches.futureComponents}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
export default Launches;
