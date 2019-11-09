import React from "react";

import {
  Grid,
  Label,
  Container,
  Button,
  Segment,
  Card,
  CardHeader
} from "semantic-ui-react";
import data from "../../data.json";

// set context

const Menus = props => {
  const [foodData, setfoodData] = React.useState(data);
  const [localData, setLocalData] = React.useState({});
  React.useState(() => {
    console.log(data.categorys);
    setLocalData(data);
  }, []);
  const [err, setErr] = React.useState({ err: "" });
  return (
    <div>
      <Container>
        <br />
        <Label color="orange" size="big">
          Our Food Menu
        </Label>
        <Button
          style={{ marginLeft: "800px" }}
          color="red"
          onClick={() => {
            props.history.push("/");
          }}
        >
          Go Home
        </Button>
        <br />
        <br />

        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button color="pink" fluid size="small">
                Indian
              </Button>
              <br />
              <Button color="red" fluid size="small">
                Spicy Indian
              </Button>
              <br />
              <Button color="green" fluid size="small">
                Mexican
              </Button>
              <br />
              <Button color="yellow" fluid size="small">
                Fast Food
              </Button>
              <br />
              <Button color="linkedin" fluid size="small">
                Mexican
              </Button>
              <br />
              <Button color="grey" fluid size="small">
                American
              </Button>
              <br />
              <Button color="olive" fluid size="small">
                Russian Beer
              </Button>
              <br />
            </Grid.Column>
            <Grid.Column>
              <div>
                {data.categorys.map(food =>
                  food.menu_itemss.map(food_menu => (
                    <div>
                      <Grid>
                        <div>
                          <Grid.Column>
                            <Card
                              header={food_menu.name}
                              description={food_menu.description}
                              extra={"the position is" + food_menu.position}
                            />
                            <Button color="black" fluid>
                              Add Food
                            </Button>
                          </Grid.Column>
                        </div>
                      </Grid>
                    </div>
                  ))
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Menus;
