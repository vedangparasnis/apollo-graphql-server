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

import "../../../App.css";

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
    <div className="drawer">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width={token ? "wide" : "very thin"}
        >
          <Menu.Item as="a">
            <Button secondary>
              <Link to="/">Home</Link>
            </Button>
          </Menu.Item>
          {token ? (
            <div>
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
              <Menu.Item>
                <Button secondary>
                  <Link to="/DeleteAccount"> Delete </Link>
                  <Icon name="delete"></Icon>
                </Button>
              </Menu.Item>
            </div>
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
          <div className="home" style={{ height: "auto" }}>
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
