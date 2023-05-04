import React, { useEffect, useState } from "react";

function Links(props) {
  const [linksData, setLinks] = useState({
    siteId: "",
    siteName: "",
    siteNameLong: "",
  });

  const links = props?.launch?.links;
  useEffect(() => {
    setLinks(links);
  }, [links]);
  return (
    <>
      <div className="accordion" id="accordionLinks">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLinks"
              aria-expanded="true"
              aria-controls="collapseLinks"
            >
              Media Links
            </button>
          </h2>
          <div
            id="collapseLinks"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionLinks"
          >
            <div className="accordion-body">
              <h3>Launch Site</h3>

              <ul class="list-group">
                <li class="list-group-item">
                  <a href={linksData?.articleLink}>Article Link</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.redditCampaign}>Reddit Campaign</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.redditMedia}>Reddit Media</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.presskit}>Presskit</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.redditRecovery}>Reddit Recovery</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.videoLink}> Youtube Video Link</a>
                </li>
                <li class="list-group-item">
                  <a href={linksData?.wikipedia}> Wikipedia Link</a>
                </li>
              </ul>
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  {linksData?.flickrImages?.map((image) => {
                    return (
                      <div class="carousel-item active">
                        <img
                          src={image}
                          class="d-block w-100"
                          alt="..."
                          style={{ width: "180px", height: "200px" }}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Links;
