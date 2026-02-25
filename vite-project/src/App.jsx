import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MyPages from './pages/MyPages';
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <MyPages />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Provider>
  );
}
export default App;
