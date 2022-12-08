import { ChangeEvent, useEffect, useState } from "react"
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
    // 获取用户输入的信息   
    const [usernameVal, setUsernameVal] = useState("");  //定义用户输入用户名这个变量 
    const [passwordVal, setPasswordVal] = useState("");  //定义用户输入密码这个变量 
    const [captchaVal, setCaptchaVal] = useState("");    //定义用户输入验证码这个变量

    const usernameChange = (e:ChangeEvent<HTMLInputElement>) =>{
        // 获得用户输入的用户名
        // console.log(e.target.value)
        // 修改usernameVal这个变量为用户输入的那个值，以后拿到usernameVal这个变量就相当于拿到用户输入的信息
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>) =>{
        // 获得用户输入的用户名
        // console.log(e.target.value)
        // 修改usernameVal这个变量为用户输入的那个值，以后拿到usernameVal这个变量就相当于拿到用户输入的信息
        setPasswordVal(e.target.value)
    }
    const captchaChange = (e:ChangeEvent<HTMLInputElement>) =>{
        // 获得用户输入的用户名
        // console.log(e.target.value)
        // 修改usernameVal这个变量为用户输入的那个值，以后拿到usernameVal这个变量就相当于拿到用户输入的信息
        setCaptchaVal(e.target.value)
    }
    const gotoLogin = () =>{
        console.log("用户输入的用户名，密码，验证码分别是：", usernameVal, passwordVal, captchaVal);
    }
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
                        <Input placeholder="Username" onChange={usernameChange}/>
                        <Input.Password placeholder="Password" onChange={passwordChange}/>
                        <div className="captchaBox">
                            <Input placeholder="Capthca " onChange={captchaChange}></Input>
                            <div className="captchaImg">
                                <img height="38" src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={gotoLogin}>Enter</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View;