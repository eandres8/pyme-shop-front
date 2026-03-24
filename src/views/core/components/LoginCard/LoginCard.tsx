import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { signInSchema } from "@/app/schemas";
import { useAuth } from "../../hooks";
import type { TSignIn } from "@/data/types";

export const LoginCard: React.FC = () => {
  const { handleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signInSchema)
  });

  const onSubmit = (data: Partial<TSignIn>) => {
    handleSignIn(data as TSignIn)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Iniciar sesión
          </Typography>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            error={!!errors?.email}
            {...register('email')}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            error={!!errors?.password}
            {...register('password')}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, borderRadius: "999px", }}
          >
            Entrar
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
