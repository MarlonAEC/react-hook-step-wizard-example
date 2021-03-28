import * as React from "react";
import { Wizard, Steps, Step, Navigation } from "react-hooks-multi-step-wizard";
import { useForm } from "./hooks/useForm";
import styles from "./index.module.css";

export const PizzaOrder: React.SFC = (): JSX.Element => {
  const { inputs, change } = useForm();

  return (
    <div className={`${styles.container} container`}>
      <div className="box">
        <h4 className="title is-4">Order Pizza</h4>
        <Wizard>
          <Steps>
            <Step>
              <h5 className="title is-5">Enter the type of pizza:</h5>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="name"
                    name="name"
                    value={inputs.name}
                    onChange={change}
                  />
                </div>
              </div>
            </Step>
            <Step>
              <h5 className="title is-5">Enter the delivery address:</h5>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="name"
                    name="nameb"
                    value={inputs.nameb}
                    onChange={change}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Street</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="street"
                    name="streetb"
                    value={inputs.streetb}
                    onChange={change}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="city"
                    name="cityb"
                    value={inputs.cityb}
                    onChange={change}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">State</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="state"
                    name="stateb"
                    value={inputs.stateb}
                    onChange={change}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Zip</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="zip"
                    name="zipb"
                    value={inputs.zipb}
                    onChange={change}
                  />
                </div>
              </div>
            </Step>
            <Step>
              <h2 className="title is-">confirmation page</h2>
              <h4 className="title is-4">Pizza</h4>
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{inputs.name}</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="title is-4">sender address</h4>
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{inputs.nameb}</td>
                  </tr>
                  <tr>
                    <td>Street</td>
                    <td>{inputs.streetb}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{inputs.cityb}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>{inputs.stateb}</td>
                  </tr>
                </tbody>
              </table>
            </Step>
            <Step>
              <h4 className="title is-4">your pizza was ordered!</h4>
            </Step>
          </Steps>
          <Navigation />
        </Wizard>
      </div>
    </div>
  );
};
