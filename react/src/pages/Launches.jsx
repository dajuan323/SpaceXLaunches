import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../app/launchSlice";

function Launches() {
  const dispatch = useDispatch();
  const { launches, loading, error } = useSelector((state) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Link to="#" className="float-end">
          Export <i className="mdi mdi-download ms-1"></i>
        </Link>

        <h4 className="header-title mt-2 mb-3">Launches</h4>

        <Table hover responsive className="mb-0">
          <tbody>
            {launches.map((launch) => (
              <tr key={launch.flightNumber}>
                <td>
                  <h5 className="font-14 my-1 fw-normal">
                    {launch.missionName}
                  </h5>
                  <span className="text-muted font-13">
                    {launch.launchYear}
                  </span>
                </td>
                <td>
                  <h5 className="font-14 my-1 fw-normal">
                    {launch.launchDateUtc}
                  </h5>
                  <span className="text-muted font-13">Launch Date UTC</span>
                </td>
                <td>
                  <h5 className="font-14 my-1 fw-normal">
                    {launch.launchDateLocal}
                  </h5>
                  <span className="text-muted font-13">Launch Date Local</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Launches;
