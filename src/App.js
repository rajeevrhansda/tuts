import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {update, remove} from './redux/userSlice'

function App() {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const handleUpdate = (e)=>{
    e.preventDefault();
    dispatch(update({name, email}));
  }
  const handleClear = (e)=>{
    e.preventDefault();
    dispatch(remove());
  }
  return (
    <div className="app">
      <input
        placeholder={user.name}
        onChange={(e)=> setName(e.target.value)}
        value={name}
      />
      <input
        placeholder={user.email}
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
      />
      <button onClick={handleUpdate}>Update</button>
      <h2>name:{user.name}</h2>
      <h2>email:{user.email}</h2>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
