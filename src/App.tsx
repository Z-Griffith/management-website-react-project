import { useEffect } from 'react'
// import { Button } from 'antd'
// import { UpCircleOutlined} from "@ant-design/icons"
import { useRoutes, useLocation, useNavigate } from "react-router-dom"
import router from "./router"
import { message } from "antd"


function ToLogin(){
  const navigateTo = useNavigate()
  // 加载完这个组件之后
  useEffect(()=>{
    // 加载完组件之后执行这里的代码
    navigateTo("/login")
    message.warning("Not login yet")

  },[])
  return <div></div>
}

function ToPage1(){
  const navigateTo = useNavigate()
  // 加载完这个组件之后
  useEffect(()=>{
    // 加载完组件之后执行这里的代码
    navigateTo("/Page1")

  },[])
  return <div></div>
}

function BeforeRouterEnter(){
  const outlet = useRoutes(router);
  /*
    后台管理系统的两种经典的跳转情况：
    1. 如果访问的是登录页面， 而且有token， 跳转到首页
    2. 如果访问的不是登录页面，并且没有token，跳转到登录页面
    3. 其余的都可以正常就行
  */
 const location = useLocation();
  let token = localStorage.getItem("zayn-react-management-token");
  if (location.pathname === "/login" && token){
    // 这里不能直接用 useNavigate 来实现跳转， 因为需要BeforeRouterEnter是一个正常的jsx组件
    return <ToPage1 />
  }

  if (location.pathname !== "/login" && !token){
    // 这里不能直接用 useNavigate 来实现跳转， 因为需要BeforeRouterEnter是一个正常的jsx组件
    return <ToLogin /> 
  }





  return outlet
}



// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"
// import 'antd/dist/reset.css'; // ❌全局引入导致所有样式都被引入
//使用了plugin import styleImport,{AntdResolve} from 'vite-plugin-style-import'
function App() {

  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {/* {outlet} */}
      < BeforeRouterEnter />
    </div>
  )
}

export default App
