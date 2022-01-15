import { createContext, useState, Dispatch, SetStateAction } from "react";

export const Context = createContext<Value | null>(null);

interface Props {
    children: JSX.Element
}

interface User {
    puntos: number,
    productos: []
}

interface Value {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const UserProvider = ({ children }: Props) => {

    const [user, setUser] = useState<User>({ puntos: 0, productos: [] })

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;