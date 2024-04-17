import React from "react";
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
                <section>
                    {data!.products.map((prod) => (
                        <aside key={prod.id}>
                            <h1>{prod.title}</h1>
                        </aside>
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};



