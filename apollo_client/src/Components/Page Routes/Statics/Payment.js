import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

const Payment = () => {
  const api_key = "";
  const [food, setFood] = React.useState([]);

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <div>
      <Container>
          <Grid>
              <Grid.Column>
                  <Button onClick={()=>{
                      props.history.push('/Menu')
                  }}
              </Grid.Column>
          </Grid>
      </Container>
    </div>
  );
};
