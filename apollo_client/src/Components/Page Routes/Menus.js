import React from "react";

import {
  List,
  Menu,
  Breadcrumb,
  Grid,
  Label,
  Container,
  Button
} from "semantic-ui-react";
import data from "../../data.json";

const Menus = props => {
  const [foodData, setfoodData] = React.useState(data);
  const [err, setErr] = React.useState({ err: "" });
  return (
    <div>
      <Container>
        <br />
        <Label color="orange" size="big">
          Our Food Menu
        </Label>
        <Label style={{ marginLeft: "800px" }}>
          <Button
            color="red"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Go Home
          </Button>
        </Label>
      </Container>
    </div>
  );
};

export default Menus;
