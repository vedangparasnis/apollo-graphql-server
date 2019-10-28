import React from "react";
import { AuthContext } from "../Context/context";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

// semantic ui stuff
import { Divider, Grid, Container } from "semantic-ui-react";

function DeleteAccount() {
  const [delMessage, setDelMessage] = React.useState({ msg: "" });
  const [del, { loading }] = useMutation(query, {
    update(proxy, result) {
      setDelMessage(...delMessage, ...{ msg: result });
    },
    onError(err) {
      console.log(err.graphQLErrors[0]);
    },
    onCompleted(msg) {
      console.log("done deleting account");
    }
  });
  const context = React.useContext(AuthContext);
  return (
    <Container>
      <div></div>
    </Container>
  );
}

//gql query
const query = gql`
  mutation deleteAccount($msg: String!) {
    msg
  }
`;

export default DeleteAccount;
