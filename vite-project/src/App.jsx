import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Provider } from "react-redux";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/mypage"
        element={
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
export default App;
