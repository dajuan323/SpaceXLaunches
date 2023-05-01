import axios from "axios";

const endpoint = "https://localhost:7116/api/launches";

const getAllLaunches = (limit, offset) => {
  const config = {
    method: "GET",
    url: `${endpoint}?limit=${limit}&offset=${offset}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const civilianProfileService = { getAllLaunches };
export default civilianProfileService;
