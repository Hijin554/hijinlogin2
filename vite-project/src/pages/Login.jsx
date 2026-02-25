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
      setError('아이디와 비밀번호를 모두 입력해주세요 💦');
      return;
    }

    if (id === 'admin' && pw === '1234') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', id);

      setError('');
      nav('/mypage');
    } else {
      setError('아이디 또는 비밀번호가 틀렸어요 🥺');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-100 to-rose-100">
      <div className="w-full max-w-sm p-8 bg-white/90 border-2 border-pink-200 rounded-3xl shadow-xl">
        {/* 상단 이모지 */}
        <div className="text-center mb-2 text-3xl">💗✨🎀</div>

        <h2 className="text-2xl font-bold text-center text-pink-500 mb-1">
          Login
        </h2>
        <p className="text-center text-sm text-pink-400 mb-6">
          환영해요 💕 로그인 해주세요
        </p>

        {/* 아이디 입력칸 */}
        <div className="mb-3">
          <label className="block text-sm text-pink-500 mb-1">👤 아이디</label>
          <input
            type="text"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl bg-pink-50 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* 비밀번호 입력칸 */}
        <div className="mb-4">
          <label className="block text-sm text-pink-500 mb-1">🔒 비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl bg-pink-50 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 rounded-xl border border-pink-500 transition shadow-sm"
          onClick={handleLogin}
        >
          💖 로그인 하기
        </button>

        {/* 에러 메시지 */}
        {error && <p className="text-red-500 mt-4 text-sm text-center">{error}</p>}

        {/* 연습용 계정 안내 */}
        <p className="mt-4 text-sm text-pink-400 text-center">
          💡 연습용 계정: <span className="font-semibold">admin / 1234</span>
        </p>

        {/* 하단 장식 */}
        <div className="text-center mt-4 text-lg">🩷 ⋆｡°✩ ♡ ✩°｡⋆ 🩷</div>
      </div>
    </div>
  );
}