import React, { useEffect, useState } from "react";
import "../launchstyles.css";

function Rocket(props) {
  const [rocketData, setRocket] = useState({
    rocketId: "",
    rocketName: "",
    rocketType: "",
  });
  const rocket = props.rocket;
  useEffect(() => {
    setRocket(rocket);
  }, [rocket]);
  return (
    <>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseRocket"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseRocket"
            >
              Rocket
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseRocket"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <h3>Rocket</h3>
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Rocket Id</th>
                    <th>Rockt Name</th>
                    <th>Rocket Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{rocketData?.rocketId}</td>
                    <td>{rocketData?.rocketName}</td>
                    <td>{rocketData?.rocketType}</td>
                  </tr>
                </tbody>
              </table>
              <div className="list-group-vertical">
                <hr />
                <ul class="list-group">
                  <li
                    class="list-group-item bg-dark"
                    style={{ color: "powderBlue" }}
                  >
                    <h4>
                      <em>Fairings</em>
                    </h4>
                  </li>
                  <li class="list-group-item">
                    Recovered: {rocketData?.fairings?.recovered.toString()}
                  </li>
                  <li class="list-group-item">
                    Recovery Attempt:{" "}
                    {rocketData?.fairings?.recoveryAttempt.toString()}
                  </li>
                  <li class="list-group-item">
                    Reused: {rocketData?.fairings?.reused.toString()}
                  </li>
                  <li class="list-group-item">
                    Ship: {rocketData?.fairings?.ship}
                  </li>
                </ul>
                <hr />
                <ul class="list-group">
                  <li
                    class="list-group-item bg-dark"
                    style={{ color: "powderBlue" }}
                  >
                    <h4>
                      <em>First Stage</em>
                    </h4>
                  </li>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFirstStage"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFirstStage"
                      >
                        Cores
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFirstStage"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        <ul>
                          <li class="list-group-item">
                            Block: {rocket?.firstStage?.cores[0]?.block}
                          </li>
                          <li class="list-group-item">
                            Core Serial:{" "}
                            {rocket?.firstStage?.cores[0]?.coreSerial}
                          </li>
                          <li class="list-group-item">
                            Flight: {rocket?.firstStage?.cores[0]?.flight}
                          </li>
                          <li class="list-group-item">
                            Gridfins:{" "}
                            {rocket?.firstStage?.cores[0]?.gridfins}
                          </li>
                          <li class="list-group-item">
                            Land Success:{" "}
                            {rocket?.firstStage?.cores[0]?.landSuccess?.toString()}
                          </li>
                          <li class="list-group-item">
                            Landing Intent:{" "}
                            {rocket?.firstStage?.cores[0]?.landingIntent?.toString()}
                          </li>
                          <li class="list-group-item">
                            Landing Type:{" "}
                            {rocket?.firstStage?.cores[0]?.landingType}
                          </li>
                          <li class="list-group-item">
                            Landing Vehicle:{" "}
                            {rocket?.firstStage?.cores[0]?.landingVehicle}
                          </li>
                          <li class="list-group-item">
                            Legs:{" "}
                            {rocket?.firstStage?.cores[0]?.legs.toString()}
                          </li>
                          <li class="list-group-item">
                            Re-used:{" "}
                            {rocket?.firstStage?.cores[0]?.reused.toString()}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
                <ul class="list-group">
                  <li
                    class="list-group-item bg-dark"
                    style={{ color: "powderBlue" }}
                  >
                    <h4>
                      <em>Second Stage</em>
                    </h4>
                  </li>
                  <ul>
                    <li class="list-group-item">
                      Block:{" "}
                      {rocket?.secondStage?.block
                        ? rocket?.secondStage?.block.toString()
                        : "N/A"}
                    </li>
                  </ul>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseCores"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseCores"
                      >
                        Cores
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseCores"
                      class="accordion-collapse collapse"
                    >
                      <div class="accordion-body">
                        <ul>
                          <li class="list-group-item">
                            Block: {rocket?.secondStage?.payloads[0]?.payloadId}
                          </li>
                          <li class="list-group-item">
                            Block:
                            {rocket?.secondStage?.payloads[0]?.customers[0]}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.manufacturer}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.nationality}
                          </li>
                          <li class="list-group-item">
                            Block: {rocket?.secondStage?.payloads[0]?.noradId}
                          </li>
                          <li class="list-group-item">
                            Block: {rocket?.secondStage?.payloads[0]?.orbit}
                          </li>
                          <li>
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseOrbitParams"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseOrbitParams"
                                >
                                  Orbit Params
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseOrbitParams"
                                class="accordion-collapse collapse"
                              >
                                <div class="accordion-body">
                                  <ul>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.apoapsisKm
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.argOfPericenter
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.eccentricity
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.epoch
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.inclinationDeg
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.lifespanYears
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.longitude
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.meanAnomaly
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.meanMotion
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.periapsis_km
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.periodMin
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.raan
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.referenceSystem
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.regime
                                      }
                                    </li>
                                    <li class="list-group-item">
                                      Block:{" "}
                                      {
                                        rocket?.secondStage?.payloads[0]
                                          ?.orbitParams?.semiMajorAxisKm
                                      }
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            Block: {rocket?.secondStage?.payloads[0]?.payloadId}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.payloadMassKg}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.payloadMassLbs}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.payloadType}
                          </li>
                          <li class="list-group-item">
                            Block:{" "}
                            {rocket?.secondStage?.payloads[0]?.reused.toString()}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rocket;
