//懒加载的模式需要我们给他增加一个Loading组件
import React,{ lazy } from "react"
// Naviagte 重定向组件
import {Navigate} from "react-router-dom"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"

// const Dashboard = lazy(()=>import("../views/Dashboard"))
// const User= lazy(()=>import("../views/User"))
const Page1= lazy(()=>import("../views/Page1"))
const Page2= lazy(()=>import("../views/Page2"))

const withLoadingComponent = (comp:JSX.Element) => (
<React.Suspense fallback={<div>Loading...</div>}> 
    {comp}
</React.Suspense>
)

const routes = [
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    // 都是 "/" 下的子路由 
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path:"/page2",
                element: withLoadingComponent(<Page2 />)
            }
        ]
    },
    //懒加载模式的组件写法，需要有一层loading的提示加载组件
    // {
    //     path:"/dashboard",
    //     element: withLoadingComponent(<Dashboard />)
    // },
    // {
    //     path:"/user",
    //     element: withLoadingComponent(<User />)
    // },
]

export default routes