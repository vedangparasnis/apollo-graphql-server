import React from "react";

import {
  Grid,
  Label,
  Container,
  Button,
  Divider,
  Card,
  CardHeader
} from "semantic-ui-react";

import { List, arrayMove } from "react-movable";
import "../../App.css";
import data from "../../data.json";

// set context

const color = ["green", "yellow", "blue", "linkedin", "olive", "black", "red"];
const Menus = props => {
  const [foodData, setfoodData] = React.useState(data);
  const [localData, setLocalData] = React.useState({});
  const [selected, setSelected] = React.useState([]);
  let [doodname, setFoodname] = React.useState([]);
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
          <Grid.Column width={4}>
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
          <Grid.Column width={10}>
            <div>
              {data.categorys.map(food => (
                <div>
                  <Divider horizontal>Menu Types</Divider>
                  <div className="mb-4">
                    <Label fluid color="green">
                      {food.name}
                    </Label>
                  </div>
                  <Card.Group itemsPerRow="2">
                    {food.menu_itemss.map(food_menu => (
                      <div className="mx-3">
                        <Card
                          header={food_menu.name}
                          description={food_menu.description}
                          extra={"the position is" + food_menu.position}
                          width="100"
                        />
                        <Card.Content extra>
                          <Button
                            fluid
                            id="but"
                            onClick={() => {
                              setSelected([...selected, food_menu]);
                              setFoodname([...doodname, food_menu.name]);
                              console.log(selected);
                              // /asshole it return a callback
                            }}
                          >
                            Order Food
                          </Button>
                        </Card.Content>
                      </div>
                    ))}
                  </Card.Group>
                </div>
              ))}
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <span>Hello there your menu (Drag and change by priority) </span>
            <List
              values={doodname}
              onChange={({ oldIndex, newIndex }) =>
                setSelected(arrayMove(selected, oldIndex, newIndex))
              }
              renderList={({ children, props }) => (
                <ul {...props}>{children}</ul>
              )}
              renderItem={({ value, props }) => (
                <li id="li" {...props}>
                  {value}
                </li>
              )}
            />
            {doodname.length > 5 ? (
              <Button color="blue">Done Now</Button>
            ) : (
              <Button loading color="orange">
                ADD MORE
              </Button>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Menus;
