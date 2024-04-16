import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "../routes/Navbar";
import { Products } from "../containers/Products";
import { Cart } from "../containers/Cart";

const RRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RRouter} />
        </React.Fragment>
    );
};


