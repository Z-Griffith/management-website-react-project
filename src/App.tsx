import { useState } from 'react'
// import { Button } from 'antd'
// import { UpCircleOutlined} from "@ant-design/icons"
import { useRoutes, Link } from "react-router-dom"
import router from "./router"

// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"
// import 'antd/dist/reset.css'; // ❌全局引入导致所有样式都被引入
//使用了plugin import styleImport,{AntdResolve} from 'vite-plugin-style-import'
function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像Vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
