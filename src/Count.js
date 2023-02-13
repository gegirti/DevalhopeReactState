import React from "react";

export class Count extends React.Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);

    setInterval(() => {

    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
