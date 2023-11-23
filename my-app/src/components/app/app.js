import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M", salary: 3000, increase: true, rise: true, id: 2 },
        { name: "Gustav G", salary: 4000, increase: true, rise: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  addEmployee = (employeeData) => {
    this.setState((prevState) => ({
      data: [...prevState.data, employeeData],
    }));
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const old = data[index];

      const newItem = { ...old, increase: !old.increase };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }

    })
  };

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
