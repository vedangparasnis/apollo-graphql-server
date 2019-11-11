import React from "react";

import {
  Grid,
  Label,
  Container,
  Button,
  Divider,
  Card,
  CardHeader,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

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
  const [scrollStatus, setscrollStatus] = React.useState(false);
  React.useState(() => {
    console.log(data.categorys);
    setLocalData(data);
  }, []);
  window.addEventListener("scroll", () => {
    if (scrollStatus == false) {
      setscrollStatus(true);
      console.log("display model");
    }
  });
  const [err, setErr] = React.useState({ err: "" });
  const Clicker = e => {};
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
            <Label color="red">
              Apply Filters <Icon name="filter" />
            </Label>
            <Divider horizontal />
            <Button color="pink" fluid size="small" onClick={Clicker}>
              Appeteasers
            </Button>
            <br />
            <Button
              color="red"
              fluid
              size="small"
              onClick={Clicker("Fino sides")}
            >
              Fino sides
            </Button>
            <br />
            <Button
              color="green"
              fluid
              size="small"
              onClick={Clicker("Peri-peri chicken")}
            >
              Peri-peri chicken
            </Button>
            <br />
            <Button
              color="yellow"
              fluid
              size="small"
              onClick={Clicker("Sharing platters")}
            >
              Sharing platters
            </Button>
            <br />
            <Button
              color="linkedin"
              fluid
              size="small"
              onClick={Clicker("Mexican")}
            >
              Mexican
            </Button>
            <br />
            <Button
              color="grey"
              fluid
              size="small"
              onClick={Clicker("Dessert")}
            >
              Dessert
            </Button>
            <br />
            <Button
              color="olive"
              fluid
              size="small"
              onClick={Clicker("Salads")}
            >
              Salads
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
              <Button color="blue">
                <Link to="/Menu">Compare Order Now</Link>
              </Button>
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
