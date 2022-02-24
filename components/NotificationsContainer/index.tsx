import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import Notification from "../Notification";
import { Container } from "./styles";

let notificationId = 0;

export default function NotificationsContainer() {
  const [activeNotifications, setActiveNotifications] = useState<string[]>([]);

  const { user } = useContext(Context)!;

  useEffect(() => {
    if(!user.productos.length) return
    const lastProduct = user.productos[user.productos.length - 1]
    setActiveNotifications((prev) => [...prev, lastProduct._id])
  }, [user.productos.length]) // eslint-disable-line react-hooks/exhaustive-deps

  const close = (id: string) => {
    setActiveNotifications((prev) => prev.filter(n => n !== id))
  }
  console.log(user.productos)

  return (
    <Container>
      {
        user.productos.map(p => {
          return( activeNotifications.includes(p._id) &&
            <Notification close={close} productName={p.name} id={p._id} key={notificationId++} type='success'/>
          )
        })
      }
    </Container>
  );
}
