import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../../firebase';

const Dashboard = () => {
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>Bem-vindo, {user.displayName || 'Usuário'}</h1>
      <button onClick={() => auth.signOut()}>Sair</button>
    </div>
  );
};

export default Dashboard;
