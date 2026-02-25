import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('로그인 버튼 클릭됨');
    console.log('입력한 아이디:', id);
    console.log('입력한 비밀번호:', pw);

    if (id.trim() === '' || pw.trim() === '') {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (id === 'admin' && pw === '1234') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', id);

      console.log('auth 저장됨:', localStorage.getItem('auth'));
      console.log('username 저장됨:', localStorage.getItem('username'));

      setError('');
      nav('/mypage');
    } else {
      setError('아이디 또는 비밀번호가 틀렸어요.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-sm p-8 bg-white border-2 border-pink-200 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
          Login
        </h2>

        {/* 아이디 입력칸 */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg bg-pink-50 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* 비밀번호 입력칸 */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg bg-pink-50 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 rounded-lg border border-pink-500 transition"
          onClick={handleLogin}
        >
          로그인
        </button>

        {/* 에러 메시지 */}
        {error && <p className="text-red-500 mt-4 text-sm text-center">{error}</p>}

        {/* 연습용 계정 안내 */}
        <p className="mt-4 text-sm text-pink-400 text-center">
          연습용 계정: admin / 1234
        </p>
      </div>
    </div>
  );
}