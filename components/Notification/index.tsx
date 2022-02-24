import Image from "next/image";
import { useEffect } from "react";
import { StyledNotification } from "./styles";

interface Props {
  productName: string;
  id: string;
  type: "success" | "error";
  close: (id: string) => void;
}

export default function Notification({ productName, type, id, close }: Props) {

  useEffect(() => {
    setTimeout(() => {
      close(id)
    }, 3000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledNotification className={type}>
      <Image
        src={
          type === "success"
            ? "/assets/icons/system-success.svg"
            : "/assets/icons/system-error.svg"
        }
        width="26"
        height="26"
        alt={type}
      />
      {type === "success" ? (
        <p>
          <span>{productName}</span> redeemed successfully
        </p>
      ) : (
        <p>There was a problem with the transaction</p>
      )}
      <button onClick={() => close(id)}>
        <Image
          src="/assets/icons/cross-default.svg"
          width="24"
          height="24"
          alt="success"
        />
      </button>
    </StyledNotification>
  );
}
