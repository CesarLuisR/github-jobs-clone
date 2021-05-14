import { useState, useEffect } from "react";
import axios from "axios";

const useJobData = (location, jobType) => {
  const [jobs, setJobs] = useState([]);
  const [locationError, setLocationError] = useState(false);

  const cors = "https://cors-anywhere.herokuapp.com";
  const error = (err) => setLocationError(err);

  useEffect(() => {
    const position = async (pos) => {
      const coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };

      const specificUrl = `${cors}/https://jobs.github.com/positions.json?lat=${coords.latitude}&long=${coords.longitude}&page=1`;
      const defaultUrl = `${cors}/https://jobs.github.com/positions.json?location=USA&page=1`;

      const resp = await axios.get(specificUrl);

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

      if (resp.data.length < 0) {
        handlePagination(resp.data);
        setJobs(pages);
      } else {
        const data = await axios.get(defaultUrl);
        handlePagination(data.data);
        setJobs(pages);
      }
    };

    const options = {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(position, error, options);
  }, []);

  return { jobs, locationError };
};

export default useJobData;
