import React, { useEffect, useState } from "react";

function LaunchSite(props) {
  const [site, setLaunchSite] = useState({
    siteId: "",
    siteName: "",
    siteNameLong: "",
  });
  const launchSite = props.launchSite;
  useEffect(() => {
    setLaunchSite(launchSite);
  }, [launchSite]);
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Launch Site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h3>Launch Site</h3>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Site Id</th>
                      <th>Site Name</th>
                      <th>Site Name Long</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{site?.siteId}</td>
                      <td>{site?.siteName}</td>
                      <td>{site?.siteNameLong}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
export default LaunchSite;
