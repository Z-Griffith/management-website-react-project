import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入数据
// 样式初始化一般放在最前面
import "reset-css"
// UI框架的样式

//全局样式
// import "./assets/styles/global.scss"
import "@/assets/styles/global.scss"

// 组件
import App from './App'
import { BrowserRouter } from "react-router-dom"
// import Router from "./router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router/> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
