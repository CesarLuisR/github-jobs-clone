import { useState, useEffect } from "react";
import axios from "axios";

const useJobData = (id, jobType) => {
  const [data, setData] = useState([]);
  const [locationError, setLocationError] = useState(false);

  const cors = "https://cors-anywhere.herokuapp.com";
  const error = (err) => setLocationError(err);

  useEffect(() => {
    const position = async (pos) => {
      const pages = [];
      let fragmentPage = 0;

      const handlePagination = (data) => {
        let fragment = [];
        for (let i = 0; i < data.length; i++) {
          fragment.push(data[i]);

          fragmentPage++;
          if (fragmentPage === 6) fragmentPage = 0;

          if (fragmentPage === 0) {
            pages.push(fragment);
            fragment = [];
          }
        }
      };

      if (id) {
        return axios
          .get(`${cors}/https://jobs.github.com/positions.json?${id}`)
          .then((resp) =>
            resp.data.forEach((job) => job.id === id && setData(job))
          );
      }

      const coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };

      const specificUrl = `${cors}/https://jobs.github.com/positions.json?lat=${coords.latitude}&long=${coords.longitude}&page=1`;
      const defaultUrl = `${cors}/https://jobs.github.com/positions.json?location=USA&page=1`;

      const resp = await axios.get(specificUrl);

      if (resp.data.length < 0) {
        handlePagination(resp.data);
        setData(pages);
      } else {
        const data = await axios.get(defaultUrl);
        handlePagination(data.data);
        setData(pages);
      }
    };

    const options = {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(position, error, options);
  }, [id]);

  return { data, locationError };
};

export default useJobData;
