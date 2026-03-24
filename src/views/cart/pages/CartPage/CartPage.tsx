import { Box, Grid, Typography } from "@mui/material";

import { AuthCard, Navbar } from "@/views/core/components";
import { CartList, CartOrder, CartSummary } from "../../components";
import { useCartPage } from "./cart-page";
import { useAuth } from "@/views/core/hooks";

export const CartPage: React.FC = () => {
  const { listItems, hasItems, hasOrder } = useCartPage();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />

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
                {
                  hasItems ? (
                    <CartList items={listItems()} />
                  ) : (
                    <Box>
                      <Typography variant="h6" align="center" gutterBottom sx={{ opacity: 0.7 }}>
                        No hay productos seleccionados
                      </Typography>
                    </Box>
                  )
                }
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
                  <>
                    {
                      hasOrder ? (
                        <CartOrder />
                      ) : (
                        <CartSummary />
                      )
                    }
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
