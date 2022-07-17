import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/About/News"
import Message from "../pages/About/Message"
import News1 from "../pages/About/News/News1"

import { Navigate} from "react-router-dom"
let routes = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />,
        children:[
            {
                path:"news",
                element:<News/>,
                children:[
                    {
                        path:"news1/:id/:content",
                        element:<News1/>
                    }
                ]
            },
            {
                path:"message",
                element:<Message/>
            }
        ]
    },
    {
        path: "/",
        element: <Navigate to="/about" />
    }
]
export default routes;