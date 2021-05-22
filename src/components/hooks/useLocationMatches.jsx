import { useState, useEffect } from "react";
import axios from "axios";

const useLocationMatches = (data) => {
  const cors = "https://cors-anywhere.herokuapp.com";
  const [matches, setMatches] = useState();

  useEffect(() => {
    axios
      .get(`${cors}/https://jobs.github.com/positions.json?location=${data}`)
      .then((resp) => resp.data.map((el) => el.location))
      .then((resp) => setMatches(resp));
  }, [data]);

  if (!matches) return;
  matches.length = 4;
  return matches;
};

export default useLocationMatches;
