import React from "react";
import "./Products.css";
import { ProdAPI } from "../global/ProdAPI";

export const Products = () => {
    const { error, isLoading, 
        data } = ProdAPI.useProdQuery();
    
    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <main className="products">
                    {data!.products.map((prod) => (
                        <aside key={prod.id}>
                            <section className="card">
                                <aside className="card__img">
                                    <img
                                        className="card__image"
                                        alt={prod.title} 
                                        src={prod.thumbnail} 
                                    />
                                </aside>
                                <aside className="card__info">
                                    <h3>{prod.title}</h3>
                                    <p>{prod.description}</p>
                                    <p>Price:  {prod.price}</p>
                                </aside>
                            </section>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};



