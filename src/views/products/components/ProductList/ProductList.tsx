import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { ProductCard } from "../../components";
import { Product } from "@/app/entities";

const products: Product[] = Array.from({ length: 15 }).map(() => Product.fromJson({
  id: crypto.randomUUID(),
  description: "Hello world",
  name: "Product",
  price: Math.ceil(Math.random() * 10000),
  stock: Math.ceil(Math.random() * 10),
}))

export const ProductList = () => {
  const [search] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box px={{ xs: 2, md: 4 }} py={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Mejores vendidos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {filtered.map((product) => (
          <Grid key={product.id} size={{ xs:12, sm:6, md:4, lg:3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
