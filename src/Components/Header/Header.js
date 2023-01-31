import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../Context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <header>
      <h1>To Do List</h1>
      {user && <button onClick={handleLogout}>Logout</button>}
    </header>
  );
}
