import React from "react";

function Home() {
  return (
    <>
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">SpaceX Launch Watch</h1>
              <p className="col-md-8 fs-4">
                The button below should make an ajax call when clicked. Look at
                your task details for more infomation about the specifics.
              </p>
              <p>
                <button className="btn btn-primary btn-lg">
                  Make an Ajax Call on Click
                </button>
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
