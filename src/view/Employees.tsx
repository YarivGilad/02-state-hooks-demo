import { Component } from "react";

interface State {
  employeesCount: number;
}

export class Employees extends Component<object, State> {
  state = {
    employeesCount: 0,
  };

  addEmployee = () => {
    this.setState({ employeesCount: this.state.employeesCount + 1 });
  };
  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Employee counter: {this.state.employeesCount}</h3>
        <button className="button" onClick={this.addEmployee}>
          add a Employee
        </button>
      </div>
    );
  }
}
