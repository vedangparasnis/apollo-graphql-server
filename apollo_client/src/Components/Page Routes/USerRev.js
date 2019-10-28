import React, { useContext } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import decode from "jwt-decode";

import { AuthContext } from "../Context/context";

// semantic ui
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
const USerRev = () => {
  const [complete, setComplete] = React.useState(false);
  const [data, setData] = React.useState({ body: "", username: "" });
  const [err, setErr] = React.useState({});

  // meiddleware for setting context
  const [addPost, { loading }] = useMutation(query, {
    update(proxy, result) {
      console.log(result);
      setComplete(true);
    },
    onError(err) {
      console.log(err.graphQLErrors[0]);
      setErr(err);
    },
    onCompleted() {
      console.log("done man");
    }
  });
  const changer = e => {
    let username = decode(localStorage.getItem("token")).username;
    let body = e.target.value;
    const sub = { username, body };
    setData({ ...data, ...{ sub } });
  };
  const submit = e => {
    e.preventDefault();
    console.log(data);
    addPost();
  };
  return (
    <div>
      <Modal trigger={<Button secondary>Add Contributions</Button>}>
        <Modal.Header>Welcom For Contributions</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            alt="dummy"
          />
          <Modal.Description>
            <Header>Welcome there User</Header>
            <Form onSubmit={submit} loading={loading ? true : false}>
              <Form.Input
                error={data.body ? "please enter a body" : null}
                name="body"
                label="Contributions Idea..."
                onChange={changer}
              />
              <Button secondary type="submit">
                Comment on it
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

const query = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      username
    }
  }
`;

export default USerRev;
