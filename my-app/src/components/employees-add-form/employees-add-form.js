import { Component } from "react";
import nextId from "react-id-generator";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addEmployee = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    const employeeData = {
      name,
      salary,
      increase: false,
      id: nextId(),
    };

    this.props.onAddEmployee(employeeData);

    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Додайте нового співробітника</h3>
        <form className="add-form d-flex" onSubmit={this.addEmployee}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-info">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
