import * as React from "react";
import { PizzaOrder } from "./example";
import "bulma";

const App: React.FC = ({ next, previous }: any) => {
  return (
    <div className="App">
      <PizzaOrder />
    </div>
  );
};

export default App;
