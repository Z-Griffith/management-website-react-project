// 这个文件专门定义请求的参数类型和响应的类型
// 验证码的响应类型
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}
//Login 的请求参数类型
interface LoginAPIReq {
    username:string;
    password:string;
    code:string;
    uuid:string;
}
// Login 的响应类型约束
interface LoginAPIRes {
    msg:string;
    code:number;
    token:string;    
}