import { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

export const LoginCard: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <Card sx={{ maxWidth: 400, width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Iniciar sesión
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => handleLogin(email, password)}
        >
          Entrar
        </Button>
      </CardContent>
    </Card>
  );
}
