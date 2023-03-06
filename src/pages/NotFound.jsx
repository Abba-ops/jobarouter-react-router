import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam at
        necessitatibus nihil commodi enim facere excepturi quaerat placeat
        possimus sint praesentium magni maxime, incidunt officia harum, eaque
        assumenda. Itaque, quibusdam!
      </p>
      <p>
        Go to the <Link to="/">Home</Link>.
      </p>
    </div>
  );
};

export default NotFound;
