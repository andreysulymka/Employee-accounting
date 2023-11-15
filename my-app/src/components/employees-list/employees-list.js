import "./employee-list.css";

import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data }) => {
  const elements = data.map((element) => {
    return <EmployeesListItem {...element} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
