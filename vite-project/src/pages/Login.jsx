import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // 페이지 이동 리모컨
  const nav = useNavigate();

  // 1) 입력값 저장 상자 (state)
  const [id, setId] = useState(''); // 아이디 입력값
  const [pw, setPw] = useState(''); // 비밀번호 입력값
  const [error, setError] = useState(''); // 에러 문구

  // 2) 로그인 버튼 눌렀을 때 실행
  const handleLogin = () => {
    console.log('로그인 버튼 클릭됨');
    console.log('입력한 아이디:', id);
    console.log('입력한 비밀번호:', pw);

    // 빈칸 검사 (기본)
    if (id.trim() === '' || pw.trim() === '') {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    // 연습용 로그인 검사 (정답: admin / 1234)
    if (id === 'admin' && pw === '1234') {
      // 로그인 성공 → localStorage 저장
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', id);

      // 저장 확인(디버깅)
      console.log('auth 저장됨:', localStorage.getItem('auth'));
      console.log('username 저장됨:', localStorage.getItem('username'));

      // 에러 문구 지우고 마이페이지로 이동
      setError('');
      nav('/mypage');
    } else {
      // 로그인 실패
      setError('아이디 또는 비밀번호가 틀렸어요.');
    }
  };

  return (
    <div className="h-[100vh] w-100% flex justify-center items-center">
      <div className="p-24 border-solid border-2 rounded-md">
        <h2>Login</h2>

        {/* 아이디 입력칸 */}
        <div className="mb-2 border-solid border-2 rounded-sm">
          <input
            type="text"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        {/* 비밀번호 입력칸 */}
        <div className="mb-8 border-solid border-2 rounded-sm">
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          className="bg-gray-200 border-solid border-2 rounded-sm"
          onClick={handleLogin}
        >
          로그인
        </button>

        {/* 에러 메시지 (값이 있을 때만 보임) */}
        {error && <p className="text-red-500 mt-10">{error}</p>}

        {/* 연습용 계정 안내 */}
        <p className="mt-12 text-14">연습용 계정: admin / 1234</p>

      </div>
    </div>
  );
}
