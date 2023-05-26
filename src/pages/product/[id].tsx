import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          velit quae rerum dolorem nostrum qui consequatur possimus sunt!
          Veritatis vitae voluptate optio eum consequuntur, autem natus impedit
          pariatur doloribus fugit.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
