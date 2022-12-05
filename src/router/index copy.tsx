import App from "../App"
import Home from "../views/Home"
// import About from "../views/About"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
/* 两种路由模式的组件： BrowserRouter（History模式）， HashRouter（Hash模式）
const baseRouter = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route> 
        </Routes>
    </BrowserRouter>
    )
}
以上写法可以简写为,因为中间没有逻辑和变量*/
// const baseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 {/* 配置用户访问/的时候，重定向搭配/home路径 */}
//                 <Route path="/" element={<Navigate to="/home"/>} ></Route>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/about" element={<About/>}></Route>
//             </Route> 
//         </Routes>
//     </BrowserRouter>
// )
// export default baseRouter