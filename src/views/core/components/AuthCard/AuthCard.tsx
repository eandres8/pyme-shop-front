import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { LoginCard } from '../LoginCard/LoginCard';
import { RegisterCard } from '../RegisterCard/RegisterCard';

export const AuthCard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {isLogin ? <LoginCard /> : <RegisterCard />}

      <Button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </Button>
    </Box>
  );
}
