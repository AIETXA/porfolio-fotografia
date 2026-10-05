import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const ProtectAdmin = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;
  if (!isAuthenticated) {
   return <Navigate to="/admin/login" replace />;
  }

  return (
    
      <Outlet />
   
  );
};

export default ProtectAdmin;