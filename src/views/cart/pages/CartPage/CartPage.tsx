import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { AuthCard, Navbar } from "@/views/core/components";
import { CartList, type CartItem } from "../../components";

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "HERO7 Black",
    price: 399.99,
    quantity: 1,
    image: "https://via.placeholder.com/70",
  },
  {
    id: 2,
    name: "HERO7 Black",
    price: 399.99,
    quantity: 2,
    image: "https://via.placeholder.com/70",
  },
];

export const CartPage: React.FC = () => {
  const [isAuthenticated] = useState(false);
  const [items, setItems] = useState(initialItems);

  const increase = (id: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrease = (id: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  const remove = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <>
      <Navbar onSearch={() => {}} />

      <Box display="flex" justifyContent="center" pt={8}>
        <Box display="flex" width="100%" maxWidth={1280}>
          <Grid container width="100%" pt={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={{ xs:2, md: 4 }}
                px={{ xs: 2, md: 4 }}
              >
                <Typography variant="h5" align="center" gutterBottom>
                  Carrito de compras
                </Typography>
                <CartList
                  items={items}
                  onIncrease={increase}
                  onDecrease={decrease}
                  onRemove={remove}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box p={3}>
                {!isAuthenticated ? (
                  <>
                    <Box>
                      <Typography mb={2} textAlign="center">
                        Debes iniciar sesión para continuar con el pago
                      </Typography>
                    </Box>
                    <AuthCard />
                  </>
                ) : (
                  <Typography>Aquí irían las opciones de pago 💳</Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
