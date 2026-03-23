import { useState } from "react";
import { Box } from "@mui/material";

import { Navbar } from "@/views/core/components";
import { ProductList } from "../../components";

export const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");

  console.log({ search });

  return (
    <>
      <Navbar onSearch={setSearch} />
      <Box display="flex" justifyContent="center" pt={8}>
        <Box maxWidth={1280} id="prueba">
          <ProductList />
        </Box>
      </Box>
    </>
  );
};
