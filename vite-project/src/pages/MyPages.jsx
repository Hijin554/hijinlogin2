import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const nav = useNavigate();

  // localStorage에 저장된 username 꺼내오기
  const username = localStorage.getItem('username');

  // 로그아웃 버튼 눌렀을 때
  const logout = () => {
    console.log('로그아웃 버튼 눌림!');

    // 로그인 관련 정보 삭제
    localStorage.removeItem('auth');
    localStorage.removeItem('username');

    // 삭제 확인 (디버깅)
    console.log('삭제 후 auth:', localStorage.getItem('auth'));
    console.log('삭제 후 username:', localStorage.getItem('username'));

    // 로그인 페이지로 이동
    nav('/login');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>MY PAGE (보호됨)</h2>

      <p>
        안녕하세요, <b>{username || '사용자'}</b>님 👋
      </p>

      <button className="bg-gray-200 border-solid border-2 rounded-sm" onClick={logout}>로그아웃</button>
    </div>
  );
}
