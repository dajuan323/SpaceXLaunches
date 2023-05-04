import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">SpaceX Launch Watch</h1>
              <p className="col-md-8 fs-4">
                See all past and future launches of SpaceX.
              </p>
              <p>
                <Link className="btn btn-primary btn-lg" to={"launches"}>
                  See Launches
                </Link>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </main>
    </>
  );
}
export default Home;
