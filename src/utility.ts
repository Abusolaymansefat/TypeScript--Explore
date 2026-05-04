// utility type 


type Product = {
      id: number,
      name: string,
      price: number,
      stock: number,
      color?: string,
};

type productSummary = Pick<Product, "id" | "name" | "price">;

type productWithoutStock = Omit< productSummary, "stock" | "color">;

type productWithColor = Required <Product>;

const product : productWithColor = {
      id: 1,
      name: "laptop",
      price: 30000,
      stock: 10,
      color: "black",
};

type optionalProduct = Partial<Product>;
type productReadOnly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

// explore utility type with objcet