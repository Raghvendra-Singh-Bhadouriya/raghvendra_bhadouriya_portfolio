import { useState, createContext } from "react";

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const onOpen = () => { setIsOpen(true) }

    const onClose = () => { setIsOpen(false) }
    return(
        <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>
            { children }
        </SidebarContext.Provider>
    )
}