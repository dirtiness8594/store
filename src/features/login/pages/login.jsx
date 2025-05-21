import React, { useState, useEffect } from 'react'
import useUserStore from '../../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { auth } from '../../../../firebase';

/**
 *
 * @returns
 */

const Login = () => {

  const { setUser } = useUserStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleLogin = async () => {
    console.clear();
    setLoading(true);
    setError('');

    console.log('[LOGIN] Iniciando login com e-mail e senha...');
    console.log('[LOGIN] E-mail:', email);
    console.log('[LOGIN] Senha:', password ? '***' : '[vazio]');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('[LOGIN] Firebase retornou userCredential:', userCredential);

      const firebaseUser = userCredential.user;
      console.log('[LOGIN] Usuário autenticado:', firebaseUser);

      const token = await firebaseUser.getIdToken();
      console.log('[LOGIN] Token JWT:', token);

      const userData = {
        id: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        photo: firebaseUser.photoURL,
        token
      };

      console.log('[LOGIN] Dados do usuário a serem salvos no Zustand/localStorage:', userData);

      setUser(userData);

      navigate('/dashboard');

      console.log('[LOGIN] Login concluído com sucesso!');
    } catch (err) {
      console.error('[LOGIN] Erro ao fazer login:', err);
      setError('Falha no login. Verifique seu e-mail e senha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Login com Firebase</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      {/* <button onClick={handleGoogleLogin} className="google-login-button">
        Login com Google
      </button> */}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login
