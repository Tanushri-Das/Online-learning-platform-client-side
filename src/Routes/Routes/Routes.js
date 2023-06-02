import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import GoPremium from "../../Pages/GoPremium/GoPremium";
import Login from "../../Pages/Login/Login/Login";
import Register from '../../Pages/Login/Register/Register'
import Userinformation from "../../Pages/UserInformation/Userinformation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/courses/:id",
                element: <AllCourses></AllCourses>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: "/coursedetails/:id",
                element:<PrivateRoute><GoPremium></GoPremium></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/coursedetails/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path:'/userinformation',
                element:<Userinformation></Userinformation>
            }
        ]
    }
])
export default routes;