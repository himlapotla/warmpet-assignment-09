import { createBrowserRouter } from "react-router";
import HomePageLayOut from "../componantes/LayOut/HomePageLayOut";
import Home from "../componantes/mainComponents/Home";
import Login from "../componantes/AuthLayOut/Login";
import Register from "../componantes/AuthLayOut/Register";
import AuthLayOut from "../componantes/AuthLayOut/AuthLayOut";
import Profile from "../componantes/mainComponents/Profile";
import Forget from "../componantes/mainComponents/Forget";
import Details from "../componantes/mainComponents/Details";
import PrivateRout from "../Provider/PrivateRout";
import Errorlyoutt from "../componantes/mainComponents/ErrorLayout/Errorlyoutt";
import Error from "../componantes/mainComponents/ErrorLayout/Error";
import Loading from "../componantes/Loading";
import Service from "../componantes/mainComponents/Service";


const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePageLayOut> </HomePageLayOut>,
        children: [
            {
                path: '/',
                loader: () => fetch("/cardsData.json"),
                hydrateFallbackElement: <Loading> </Loading>,
                element: <Home> </Home>
            },

            {
                path: '/profile',
                element: <Profile> </Profile>,
            },

            {
                path: '/forget-passwrd',
                element: <Forget> </Forget>, 
            },

            {
                path: '/service',
                element: <Service> </Service>
            },

            {
                path: 'detail/:id',
                loader: () => fetch("/cardsData.json"),
                hydrateFallbackElement: <Loading> </Loading>,
                element: <PrivateRout> <Details> </Details> </PrivateRout>
            }
        ]
    },

    {
        path: 'auth',
        element: <AuthLayOut> </AuthLayOut>,
        children: [
            {
                path: 'login',
                element: <Login> </Login>,
            },

            {
                path: 'register',
                element: <Register> </Register>,
            }
        ]
    },

    {
        path:'*',
        element: <Errorlyoutt> </Errorlyoutt>,
        children:[
            {
                path: '*',
                element: <Error> </Error>,
            }
        ]
    }

])

export default allRouter