import Image from "next/image";
import { useContext, useState } from "react";
import { Btn } from "./styles";
import { Context } from "../../context";

export default function Button({ cost }: { cost: number }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const { user, setUser } = useContext(Context)!;
  const canRedeem = user.puntos >= cost;

  const handleClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUser((user) => {
        return {
          ...user,
          puntos: user.puntos - cost,
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
