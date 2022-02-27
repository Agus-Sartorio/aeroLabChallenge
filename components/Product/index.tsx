import { StyledProduct } from "./styles";
import { Product as IProduct } from "../Catalog";
import Image from "next/image";
import Button from "./Button";

export default function Product({ product }: { product: IProduct }) {
  const { category, name, img } = product;
  return (
    <StyledProduct>
      <div className="product__top">
        <div className="product__img">
          {<Image src={img.hdUrl} alt={name} width="280" height="204" /> || (
            <Image
              className="img"
              src="/assets/icons/aeropay-5.svg"
              width="78"
              height="72"
              alt=""
            />
          )}
        </div>
        <div className="product__info">
          <p className="product__name">{name}</p>
          <p className="product__category">{category}</p>
        </div>
      </div>
      <Button product={product} />
    </StyledProduct>
  );
}
