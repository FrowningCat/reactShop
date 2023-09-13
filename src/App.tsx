import {Product} from './components/Product'
import {useProducts} from "./hooks/products"
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Model} from "./components/Model";
import {CreateProduct} from "./components/CreateProduct";
import {createElement, useState} from "react";
import {IProduct} from "./models";

function App() {
    const {loading, error, products, addProduct} = useProducts()
    const [model, setModel] = useState(true)

    const createHandler = (product: IProduct) => {
        setModel(false)
        addProduct(product)
    }

    return(
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loader></Loader>}
            { error && <ErrorMessage error={error}></ErrorMessage> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {model && <Model title='Create new product'>
                <CreateProduct onCreate={createHandler}></CreateProduct>
            </Model>}
        </div>
    )
}

export default App;
