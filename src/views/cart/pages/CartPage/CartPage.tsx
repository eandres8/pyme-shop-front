import { Box, Typography } from "@mui/material";

import { Navbar } from "@/views/core/components";

export const CartPage: React.FC = () => {
  return (
    <>
      <Navbar onSearch={() => {}} />

      <Box p={3}>
        <Typography variant="h5">Carrito de compras</Typography>
        <Typography>Tu carrito está vacío</Typography>
      </Box>
    </>
  );
}
