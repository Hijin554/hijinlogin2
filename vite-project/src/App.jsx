import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MyPages from './pages/MyPages';
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default App;
