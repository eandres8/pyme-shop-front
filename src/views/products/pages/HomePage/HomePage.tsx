import { useState } from "react";

import { Navbar } from "@/views/core/components";
import { ProductList } from "../../components";

export const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");

  console.log({ search });

  return (
    <>
      <Navbar onSearch={setSearch} />
      <ProductList />
    </>
  );
};
