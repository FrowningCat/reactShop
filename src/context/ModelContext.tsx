import {createContext, useState} from "react";

interface IModelContext {
    modal: boolean
    open: () => void
    close: () => void
}

export const ModelContext = createContext<IModelContext>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <ModelContext.Provider value={{ modal, open, close }}>
            { children }
        </ModelContext.Provider>
    )
}