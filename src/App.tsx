import {Product} from './components/Product'
import {useProducts} from "./hooks/products"
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Model} from "./components/Model";
import {CreateProduct} from "./components/CreateProduct";
import {createElement, useContext, useState} from "react";
import {IProduct} from "./models";
import {ModelContext} from "./context/ModelContext";

function App() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModelContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return(
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loader></Loader>}
            { error && <ErrorMessage error={error}></ErrorMessage> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {modal && <Model title='Create new product' onClose={close}>
                <CreateProduct onCreate={createHandler}></CreateProduct>
            </Model>}

            <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
            onClick={open}>+</button>
        </div>
    )
}

export default App;
