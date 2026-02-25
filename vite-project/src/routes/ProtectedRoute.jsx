import React from "react";
import { Navigate } from "react-router-dom";

// 보호 라우트 (문지기)
// children = 이 문지기 안에 들어온 페이지 (예: <MyPage />)
export default function ProtectedRoute({ children }) {
    // localStorage에서 auth 값 꺼내서 로그인 여부 검사
    const isAuthed = localStorage.getItem("auth") === "true";

    // 콘솔로 확인 (디버깅용)
    console.log("ProtectedRoute 검사 auth:", localStorage.getItem("auth"));

    // 로그인 되어 있으면 children(마이페이지) 보여주기
    // 로그인 안 되어 있으면 /login으로 보내기
    return isAuthed ? children : <Navigate to="/login" replace />;
}