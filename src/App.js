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
      <h2>name:{user.name}</h2>
      <h2>email:{user.email}</h2>
    </div>
  );
}

export default App;
