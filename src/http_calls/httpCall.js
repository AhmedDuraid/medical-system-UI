import axios from "axios";

export const getData = async (route, params = "") => {
  try {
    console.log(`Http Call to http://localhost:1000/api/${route}/${params}`);
    let data = await axios.get(`http://localhost:1000/api/${route}/${params}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
