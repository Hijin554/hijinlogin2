import { createSlice } from '@reduxjs/toolkit';

// 1) 초기 상태 (새로고침 시 남아있는 localStorage 값을 우선 확인)
const initialState = {
  isLoggedIn: !!localStorage.getItem('auth'), // 문자열 여부를 boolean으로 변환
  username: localStorage.getItem('username') || null,
};

// 2) authSlice 생성 (창고의 '인증' 구역 생성)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 로그인 액션
    loginAction: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload; // 넘겨받은 아이디를 저장

      // //! [Mentor's Tip] Redux 상태와 LocalStorage를 동기화하여 새로고침 방어
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', action.payload);
    },
    // 로그아웃 액션
    logoutAction: (state) => {
      state.isLoggedIn = false;
      state.username = null;

      localStorage.removeItem('auth');
      localStorage.removeItem('username');
    },
  },
});

// 3) 액션 함수와 리듀서 내보내기
export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
