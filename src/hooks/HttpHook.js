import { useState, useEffect } from "react";
import axios from "axios";

export const HttpHookGet = (route, params = "") => {
  const [httpData, setHttpData] = useState([]);
  const [update, setUpadte] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:1000/api/${route}/${params}`)
      .then((data) => {
        console.log(
          `Http Call to http://localhost:1000/api/${route}/${params} status :${data.status} from Hook`
        );
        setHttpData(data.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [update]);

  return {
    axiosState: [httpData, setHttpData],
    updateState: [update, setUpadte],
    loadingState: [isLoading, setIsLoading],
  };
};
