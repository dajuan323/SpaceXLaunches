import axios from "axios";

const endpoint = "https://localhost:7126/api/launches";

const getPastLaunches = (limit, offset) => {
  const config = {
    method: "GET",
    url: `${endpoint}/past/?limit=${limit}&offset=${offset}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getFutureLaunches = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/future`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getLaunchById = (id) => {
  const config = {
    method: "GET",
    url: `${endpoint}/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const launchServices = { getPastLaunches, getLaunchById, getFutureLaunches };
export default launchServices;
