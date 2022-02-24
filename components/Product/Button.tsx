import Image from "next/image";
import { useContext, useState } from "react";
import { Btn } from "./styles";
import { Product } from "../Catalog";
import { Context } from "../../context";

export default function Button({ product }: { product: Product }) {
  const { cost } = product;

  const [isProcessing, setIsProcessing] = useState(false);

  const { user, setUser } = useContext(Context)!;
  const canRedeem = user.puntos >= cost;

  const handleClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      let newProducts:Product[];
      if(user.productos.find(p => p._id === product._id)){
        newProducts = user.productos.map(p => {
          if(p._id === product._id){
            p.quantity += 1;
          }
          return p;
        })
      } else{
        newProducts = [...user.productos, product]
      }
      setIsProcessing(false);
      setUser((user) => {
        return {
          ...user,
          puntos: user.puntos - cost,
          productos: newProducts
        };
      });
    }, 1000);
  };

  return (
    <Btn
      onClick={handleClick}
      className={isProcessing ? "processing" : undefined}
      disabled={!canRedeem}
    >
      {isProcessing ? (
        "Processing"
      ) : (
        <>
          <span>{canRedeem ? "Redeem for" : "You need"}</span>
          <Image
            className="img"
            src={
              canRedeem
                ? "/assets/icons/aeropay-3.svg"
                : "/assets/icons/aeropay-4.svg"
            }
            width="24"
            height="24"
            alt=""
          />
          <span>{cost}</span>
        </>
      )}
    </Btn>
  );
}
