import React, { useContext } from "react";

import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

import Home from "../Home";

// context
import { AuthContext } from "../../Context/context";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Query } from "mongoose";

const Drawer = () => {
  // usemutation return an array while query return a queru
  let datas;
  const [users, setUsers] = React.useState([]);
  const { loading, data } = useQuery(getAppPosts, {
    onCompleted() {
      const { getUserswithUs } = data;
      setUsers(...users, getUserswithUs);
      console.log(users);
    }
  });
  const [visible, setVisible] = React.useState(false);
  const context = useContext(AuthContext);
  const { user } = context;
  let height = window.innerHeight;
  const token = localStorage.getItem("token");
  if (datas) {
    console.log(datas);
  }
  return (
    <div>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => {
            setVisible(true);
          }}
          vertical
          visible={
            token
              ? () => {
                  setVisible(!visible);
                }
              : visible
          }
          width={token ? "thin" : "wide"}
        >
          <Menu.Item as="a">
            <Button secondary>
              <Link to="/">Home</Link>
            </Button>
          </Menu.Item>
          {token ? (
            <Menu.Item>
              <Button
                secondary
                onClick={() => {
                  localStorage.clear();
                  context.logout();
                  // same as props.history.push('/')  as parent router-dom hoc
                  window.location.href = "/Login";
                }}
              >
                Logout
              </Button>
            </Menu.Item>
          ) : null}
        </Sidebar>
        <Sidebar.Pusher
          id="pushable-sidebar"
          style={{ height: "500px !important" }}
        >
          <Button
            onClick={() => {
              setVisible(!visible);
            }}
            positive
          >
            <Icon name="user" />
          </Button>
          <div className="home" style={{ height: height }}>
            <Home />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
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

export default Drawer;
