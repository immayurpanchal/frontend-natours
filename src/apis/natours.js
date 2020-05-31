import Axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const token = cookie.get("jwt");

export default Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api/v1`
    : "https://backend-natours.herokuapp.com/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
