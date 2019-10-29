import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../Context/context";
// components
import USerRev from "./USerRev";
import Del from "./DeleteAccount";

// semantic ui stuff
import { Header, Container, Card, Menu, Divider } from "semantic-ui-react";
import { Grid, Message, Image } from "semantic-ui-react";
import { Segment, Loader, Flag } from "semantic-ui-react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(getAppPosts);
  // const { load, postData } = useQuery(getAllPosts);
  if (data) {
    let { getUserswithUs } = data;
    // const { getPosts } = postData;
    return (
      <div>
        <Container>
          <br />
          <Header as="h2">Our Users</Header>
          <Segment>
            <Menu>
              <Menu.Item>
                <span>Welcome to Developers Community</span>
              </Menu.Item>
              <Menu.Item position="right">
                <Flag name="in" />
                <Flag name="it" />
                <Flag name="gb" />
                <Flag name="us" />
                <Flag name="ru" />
              </Menu.Item>
            </Menu>
          </Segment>
          <Divider />
          <Grid columns={5} divided>
            <Grid.Row>
              {getUserswithUs.map(el => (
                <div>
                  <Grid.Column key={el.id} className="marginGrid">
                    <Card className="userCard">
                      <Image
                        size="medium"
                        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      />
                      <Card.Content>
                        <Message>
                          <Message.Header>
                            {el.username.toUpperCase()}
                          </Message.Header>
                          <Message.List>
                            <Message.Item>Email::{el.email}</Message.Item>
                          </Message.List>
                        </Message>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </div>
              ))}
            </Grid.Row>
            <Grid.Row>
              {user.username === null ? null : (
                <div>
                  <USerRev /> <Del />
                </div>
              )}
            </Grid.Row>
          </Grid>
        </Container>
        <Divider />
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Segment>
            <Loader active />
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </Container>
      </div>
    );
  }
};

const getAppPosts = gql`
  {
    getUserswithUs {
      id
      email
      username
      createdAt
    }
  }
`;

const getAllPosts = gql`
  {
    getPosts {
      id
      body
      username
      createdAt
    }
  }
`;

export default Home;
