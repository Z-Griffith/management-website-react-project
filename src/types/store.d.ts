// 类型声明文件不要直接引入import... from ...,而是使用 import（“@/store“）
// import store from "@/store"
// TS 中提供了ReturnType， 用来获取函数类型的返回值
// 使用全局声明解决红色波浪线报错
// ts 文件中可以省略前面的declear
// type RootState = ReturnType<typeof store.getState>
type RootState = ReturnType<typeof import("@/store").getState>
// console.log(RootState);
interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function;
}
