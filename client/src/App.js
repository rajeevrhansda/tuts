import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from './redux/apiCalls';

function App() {
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ name, email }, dispatch);
  }
  const handleClear = (e) => {
    e.preventDefault();
    // dispatch(remove());
  }
  return (
    <div className="app">
      <input
        placeholder={userInfo.name}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder={userInfo.email}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button onClick={handleUpdate}>Update</button>
      <h2>name:{userInfo.name}</h2>
      <h2>email:{userInfo.email}</h2>
      <button
        onClick={handleClear}
        disabled={pending}
      >Clear</button>
      {error && <span>Something went wrong</span>}
      {pending === false && <span>Account updated successfully </span> }
    </div>
  );
}

export default App;
