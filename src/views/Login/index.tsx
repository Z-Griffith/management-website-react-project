import { ChangeEvent, useEffect, useState } from "react"
import { Input, Space, Button, message } from 'antd'
import styles from "./login.module.scss"
import initLogingBg from "./init.ts"
import 'antd/dist/reset.css'
import './login.less'
import { useNavigate } from "react-router-dom"
import { CaptchaAPI, LoginAPI } from "@/request/api"

const View = () => {

    let navigateTo = useNavigate();
    // 加载完这个组件之后 
    useEffect(()=>{
        initLogingBg();
        window.onresize = function(){initLogingBg()};
        getCaptchaImg(); // 做调用

    }, [])
    // 获取用户输入的信息   
    const [usernameVal, setUsernameVal] = useState("");  //定义用户输入用户名这个变量 
    const [passwordVal, setPasswordVal] = useState("");  //定义用户输入密码这个变量 
    const [captchaVal, setCaptchaVal] = useState("");    //定义用户输入验证码这个变量
    // 定义一个变量保存验证码图片信息
    const [captchaImg, setCaptchaImg] = useState("");

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
    // 点击验证码图片盒子按钮的事件函数
    const getCaptchaImg = async () =>{
        // 验证码的请求
        // CaptchaAPI().then((res)=>{
        //     console.log(res)
        // })
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes);
        if (captchaAPIRes.code === 200){
        // 1.把图片数据显示在img上面
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
        // 2.本地保存uuid，给登陆的时候用
            localStorage.setItem("uuid", captchaAPIRes.uuid)

        }


    }
    // 点击登录按钮的事件函数
    const gotoLogin = async () =>{
        console.log("用户输入的用户名，密码，验证码分别是：", usernameVal, passwordVal, captchaVal);
        // 验证是否有空值
        if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
            message.warning("Please complete all contents")
            return 
        }
        // 发起登录请求
        let loginAPIRes = await LoginAPI({
            username:usernameVal,
            password:passwordVal,
            code:captchaVal,
            uuid:localStorage.getItem("uuid") as string
        })
        console.log(loginAPIRes);
        
        if (loginAPIRes.code === 200) {
            //     1. 提示登录成功
            message.success("Login Successful")
            //     2. 保存token
            localStorage.setItem("zayn-react-management-token", loginAPIRes.token)
            //     3. 跳转到/page1
            navigateTo("/page1")
            //     4. 删除本地板寸中的uuid
           localStorage.removeItem("uuid")

        }

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
                            <Input placeholder="Captcha " onChange={captchaChange}></Input>
                            <div className="captchaImg" onClick={getCaptchaImg}>
                                <img height="38" src={captchaImg} alt="" />
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