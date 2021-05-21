import { useState, useEffect } from "react";
import axios from "axios";

const useJobData = (id, fulltime, location, search) => {
  const [data, setData] = useState([]);
  const [locationError, setLocationError] = useState(false);

  console.log("LLEGO HASTA AQUI 1");

  const cors = "https://cors-anywhere.herokuapp.com";
  const error = (err) => setLocationError(err);

  useEffect(() => {
    const position = async (pos) => {
      console.log("LLEGO HASTA AQUI 2");
      const pages = [];
      let fragmentSize = 0;

      const handlePagination = (data) => {
        console.log("LLEGO HASTA AQUI PAGINATION");
        let fragment = [];
        for (let i = 0; i < data.length; i++) {
          fragment.push(data[i]);

          fragmentSize++;
          if (fragmentSize === 6) fragmentSize = 0;

          if (fragmentSize === 0) {
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

      const FullTimeFilter = (data) => {
        if (!fulltime) return data;
        return data.filter((el) => el.type === "Full Time");
      };

      if (search !== "") {
        console.log("XD");
        return axios
          .get(
            `${cors}/https://jobs.github.com/positions.json?search=${search}`
          )
          .then((resp) => {
            handlePagination(FullTimeFilter(resp.data));
            setData(pages);
          });
      }

      const coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };

      const specificUrl = `${cors}/https://jobs.github.com/positions.json?lat=${coords.latitude}&long=${coords.longitude}`;
      const defaultUrl = `${cors}/https://jobs.github.com/positions.json?location=USA`;

      const resp = await axios.get(specificUrl);

      console.log("FINAL");

      if (resp.data.length < 0) {
        handlePagination(FullTimeFilter(resp.data));
        setData(pages);
      } else {
        try {
          const data = await axios.get(defaultUrl);
          handlePagination(FullTimeFilter(data.data));
          setData(pages);
        } catch (err) {
          console.log(err);
          setLocationError(true);
        }
      }
    };

    const options = {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(position, error, options);
  }, [id, fulltime, locationError, search]);

  return { data, locationError };
};

export default useJobData;
