import React from "react";
import ReactDOM from "react-dom";

//  context
const MyContext = React.createContext();

// Context Provider
class MyProvider extends React.Component {
  state = {
    name: "troller",
    age: 21,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

//  Family
const Family = props => (
  <div className="family">
    <Person />
  </div>
);

//  Person
class Person extends React.Component {
  render() {
    return (
      <div className="parent">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>name: {context.state.name}</p>
              <p>age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}> Add an Year!!</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am a family</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
