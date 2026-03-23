import { Card, CardContent, Typography, Box, Button, Grid } from "@mui/material";

import type { TProduct } from "@/app/types/product.type";

type Props = {
  product: TProduct;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card
      className="product-card"
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
          alt={product.title}
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

        <Box height={50} overflow="hidden">
          <Typography
            fontWeight={600}
            sx={{
              mt: 1,
              fontSize: "1rem",
            }}
          >
            {product.title}
          </Typography>
        </Box>

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
            fontWeight: 500,
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}