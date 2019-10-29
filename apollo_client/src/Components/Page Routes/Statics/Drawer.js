import React, { useContext } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Home from "../Home";

// context
import { AuthContext } from "../../Context/context";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [visible, setVisible] = React.useState(false);
  const context = useContext(AuthContext);
  return (
    <div>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Button positive>
              <Link to="/">Home</Link>
            </Button>
          </Menu.Item>

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
          <Home />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default Drawer;
