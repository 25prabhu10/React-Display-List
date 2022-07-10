import "./App.css";

const App = () => {
  const userNames = ["John", "David", "Prabhu", "Thor", "Ripley"];

  return (
    <main className="app">
      <ul className="list">
        {userNames.map((name, index) => (
          <li key={index} className="list__item">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
