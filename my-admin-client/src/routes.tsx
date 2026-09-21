import {
    createBrowserRouter
} from 'react-router-dom';
import Laut from "./component/layout.tsx";
import Sales from "./peges/Sales.tsx";

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Laut/>,
            children: [
                {
                    path: "/sales",
                    element: <Sales/>,
                }

            ]
        }
    ]);

