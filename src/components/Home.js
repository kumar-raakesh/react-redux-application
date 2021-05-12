import React, { Component } from "react";
// import "../../src/styles/styles.css";
export class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history } = this.props;
    // console.log("His", history);
    console.log("Props", this.props);
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          // onClick={() => {
          //   history.push("/home");
          // }}

          onClick={() => {
            // history.push("/about");
            this.props.actions.callApi();
            console.log("props", this.props);
          }}
        >
          <label>Home</label>
        </button>

        <button
          onClick={() => {
            history.push("/about");
          }}
        >
          <label>AboutUs</label>
        </button>

        <button
          onClick={() => {
            history.push("/carrer");
          }}
        >
          <label>Carrer</label>
        </button>
      </div>
    );
  }
}

export default Home;
