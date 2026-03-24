import { Card, CardContent, Typography, Box, Button, Grid } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import type { TCartItem } from "@/app/types";
import { IncrementButton } from "@/views/core/components";
import { useCartItem } from "@/views/core/hooks";

type Props = {
  product: TCartItem;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { handleAdd, handleDecrease, handleIncrease, handleRemove } = useCartItem();

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

        {
          product.quantity ? (
            <Box mt={2} display="flex" justifyContent="space-between">
              <IncrementButton
                id={product.id}
                quantity={product.quantity}
                maxValue={product.stock}
                onDecrease={handleDecrease(product.quantity)}
                onIncrease={handleIncrease(product.quantity)}
              />
              <Button
                size="small"
                color="error"
                startIcon={<DeleteOutlineIcon />}
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </Button>
            </Box>
          ): (
            <ButtonProductCard stock={product.stock} onClick={() => handleAdd(product)} />
          )
        }
      </CardContent>
    </Card>
  );
}

type ButtonProps = { stock: number; onClick: () => void };

const ButtonProductCard: React.FC<ButtonProps> = ({ stock, onClick }) => {
  return (
    <>
      {
        stock ? (
          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 500,
            }}
            onClick={onClick}
          >
            Comprar
          </Button>
        ) : (
          <Box mt={2}>
            <Typography
              sx={{
                mt: 1,
                color: "#666",
                textAlign: "center",
                opacity: 0.7
              }}
            >
              No hay stock disponible
            </Typography>
          </Box>
        )
      }
    </>
  )
};