import React, { useContext, useState } from 'react';
import './Auth.css';
import { UserContext } from '../../Context/UserContext.js';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  const submitAuth = async () => {
    const userResp = await authUser(email, password, type);
    setUser(userResp);
  };

  if (user) {
    return <Redirect to="/todos" />;
  }
  return (
    <main>
      <div className="switch">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <div className="form">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {type === 'sign-up' && <button onClick={submitAuth}>Sign up</button>}
        {type === 'sign-in' && <button onClick={submitAuth}>Sign in</button>}
      </div>
    </main>
  );
}
