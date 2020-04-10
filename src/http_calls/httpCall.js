import axios from "axios";

export const getData = async (route, params = "") => {
  try {
    let data = await axios.get(`http://localhost:1000/api/${route}/${params}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
