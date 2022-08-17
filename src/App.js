import { useSelector } from 'react-redux'
function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      <input
        placeholder={user.name}
      />
      <input
        placeholder={user.email}
      />
    </div>
  );
}

export default App;
