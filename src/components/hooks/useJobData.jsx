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

      const specificUrl = `${cors}/https://jobs.github.com/positions.json?lat=${coords.latitude}&long=${coords.longitude}`;
      const defaultUrl = `${cors}/https://jobs.github.com/positions.json?location=sf`;

      const resp = await axios.get(specificUrl);

      if (resp.data.length < 0) setJobs(resp.data);
      else {
        const data = await axios.get(defaultUrl);
        setJobs(data.data);
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
