import "./employee-list.css";

import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleRise, onToggleIncrease }) => {
  const elements = data.map((element) => {
    const { id, ...elementProps } = element;
    return (
      <EmployeesListItem
        key={id}
        {...elementProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => {
          onToggleIncrease(id);
        }}
        onToggleRise={() => {
          onToggleRise(id);
        }}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
