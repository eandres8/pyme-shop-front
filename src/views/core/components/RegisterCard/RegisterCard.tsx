import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import { registerSchema } from "@/app/schemas";
import { useAuth } from "../../hooks";
import type { TRegister } from "@/data/types";

export const RegisterCard: React.FC = () => {
  const { handleRegister } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema)
  });

  const onSubmit = (data: Partial<TRegister>) => {
    handleRegister(data as TRegister)
  };

  return (
    <Card sx={{ maxWidth: 400, width: "100%" }}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" gutterBottom>
            Crear cuenta
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
            label="Nombres"
            margin="normal"
            error={!!errors?.first_name}
            {...register('first_name')}
          />
          
          <TextField
            fullWidth
            label="Apellidos"
            margin="normal"
            error={!!errors?.last_name}
            {...register('last_name')}
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
            variant="outlined"
            type="submit"
            sx={{ mt: 2, borderRadius: "999px", }}
          >
            Registrarse
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
