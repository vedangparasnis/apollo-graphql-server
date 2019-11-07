import React from "react";
import { Link } from "react-router-dom";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const Data = () => {
  const [curr, setCurr] = React.useState(false);
  React.useEffect(() => {
    setCurr(!curr);
    clearInterval(() => console.log("cleared"));
  }, []);
  return (
    <div>
      <span>The Data Page</span>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Data;
