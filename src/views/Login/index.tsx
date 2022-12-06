import { useEffect } from "react"
import { Input, Space, Button } from 'antd'
import styles from "./login.module.scss"
import initLogingBg from "./init.ts"
import 'antd/dist/reset.css'
import './login.less'

const View = () => {

    // 加载完这个组件之后 
    useEffect(()=>{
        initLogingBg();
        window.onresize = function(){initLogingBg()};
    }, [])

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登陆盒子 */}
            <div className={styles.loginBox+" loginbox"}> 
            {/* <div className={styles.loginBox+}> */}
                <div className={styles.title}>
                     {/* 标题和副标题 */}
                    <h1>Zayn Front&nbsp;——&nbsp;General Administration</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分  */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="Username" />
                        <Input.Password placeholder="Password" />
                        <Button type="primary" block>Enter</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View;