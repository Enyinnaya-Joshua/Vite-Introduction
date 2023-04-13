import {createBrowserRouter} from "react-router-dom"
import LayOut from "../component/Static/LayOut"
import Register from "../Pages/Auth/Register"
import SignIn from "../Pages/Auth/SignIn"
import OTP from "../Pages/Auth/otp"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element: <LayOut />,
        children:[
            {
                index: true,
                path:"register",
                element:< Register />
            },
            {
              
                path:"sign-in",
                element:< SignIn />
            },
            {
                
                path:"reset",
                element:< OTP />
            }
        ]
    }
])