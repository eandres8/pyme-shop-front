import { Card, CardContent, Typography, Box, Button, Grid } from "@mui/material";

import type { Product } from "@/app/entities";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid #eee",
        boxShadow: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
        "&:hover": {
          boxShadow: { md: "0 8px 24px rgba(0,0,0,0.08)" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          p: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="https://img.icons8.com/ios7/1200/image--v2.jpg"
          alt={product.name}
          sx={{
            width: "100%",
            maxWidth: 180,
            height: 140,
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontWeight={500}>
            ${product.price}
          </Typography>
        </Box>

        <Typography
          fontWeight={600}
          sx={{
            mt: 1,
            fontSize: "1rem",
          }}
        >
          {product.name}
        </Typography>

        <Grid container spacing={2}>
          <Typography
            sx={{
              mt: 1,
              color: "#666",
            }}
          >
            Stock disponible: 
          </Typography>
            <Typography
            sx={{
              mt: 1,
              color: "#666",
            }}
          >
            {product.stock}
          </Typography>
        </Grid>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 2,
            borderRadius: "999px",
            textTransform: "none",
            borderColor: "#000",
            color: "#000",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}