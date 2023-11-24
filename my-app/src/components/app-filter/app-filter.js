import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Всі співробітники" },
    { name: "rise", label: "Cпівробітники на підвищення" },
    { name: "moreThen1000", label: "З/п більше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-info" : "btn-outline-info";
    return (
      <button className={`btn ${clazz}`} type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
