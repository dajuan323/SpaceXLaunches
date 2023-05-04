import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../launchstyles.css"

function LaunchProfileBox(props) {
  const launch = props.launch;
  const dateUTCStr = new Date(launch.launchDateUtc).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  });;
  return (
    <>
    <Card className="bg-dark">
      <Card.Body className="profile-user-box">
        <Row>
          <Col sm={8}>
            <Row className="align-items-center">
              <Col className="col-auto">
                <div className="avatar-lg">
                  <img
                    src={launch?.links?.missionPatchSmall}
                    style={{ height: "100px" }}
                    alt="mission patch"
                    className="rounded-circle img-thumbnail"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <h4 className="mt-1 mb-1 text-white">{launch.missionName}</h4>
                  <p className="font-13 text-white-50">Mission Name</p>
                </div>
                <div>
                  <ul className="mb-0 list-inline text-light">
                    <li className="list-inline-item me-3">
                      <h5 className="mb-1 text-white">{launch.launchYear}</h5>
                      <p className="mb-0 font-13 text-white-50">Launch Year</p>
                    </li>
                    
                    <div>
                    
                    <li className="list-inline-item">
                      <h5 className="mb-1 text-white">
                        {dateUTCStr}
                      </h5>
                      <p className="mb-0 font-13 text-white-50">Launch Data</p>
                    </li>
                    </div>
                    <li className="list-inline-item">
                      <h5 className="mb-1 text-white">
                        {launch.launchSuccess ? launch.launchSuccess.toString() : 'N/A'}
                      </h5>
                      <p className="mb-0 font-13 text-white-50">
                        Launch Success
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="mb-1 text-white">
                        {launch.upcoming? launch.upcoming.toString(): 'N/A'}
                      </h5>
                      <p className="mb-0 font-13 text-white-50">Upcoming</p>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="mb-1 text-white">
                        {launch.tentativeMaxPrecision ? launch.tentativeMaxPrecision.toString() : 'N/A'}
                      </h5>
                      <p className="mb-0 font-13 text-white-50">
                        Tentative Max Precision
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="mb-1 text-white">
                        {launch.staticFireDateUnix}
                      </h5>
                      <p className="mb-0 font-13 text-white-50">
                        Static Fire Date Unix
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="text-center mt-sm-0 mt-3 text-sm-end">
              <button type="button" className="btn btn-light">
                <i className="mdi mdi-account-edit me-1"></i> Edit Profile
              </button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <p>{launch.details}</p>
    </>
  );
}
export default LaunchProfileBox;
