import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-info" type="button">
        Всі співробітники
      </button>
      <button className="btn btn-outline-info" type="button">
        Співробітники на підвищення
      </button>
      <button className="btn btn-outline-info" type="button">
        З/п більше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
