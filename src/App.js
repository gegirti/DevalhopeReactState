import React from "react";
import { Counter } from "./Counter";
import { CounterDisplayExtract } from "./CounterDisplayExtract";
import { CounterModified } from "./CounterModified";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          State 01: <Counter />
        </div>
        <div>
          State 03:{" "}
          <CounterModified initialValue={10} incrementBy={2} timeout={2000} />
        </div>
        <div>
          State 04:
          <CounterDisplayExtract />
        </div>
      </div>
    );
  }
}
