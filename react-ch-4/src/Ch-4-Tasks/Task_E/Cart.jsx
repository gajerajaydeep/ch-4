import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const cartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state,action.item]
    }
}

export default function Cart({ children }) {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <>
            <cartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </cartDispatchContext.Provider>
        </>
    )
}
export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(cartDispatchContext)
