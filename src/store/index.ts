import { WindowsFilled } from "@ant-design/icons";
import {legacy_createStore, combineReducers} from "redux"
// import reducer from "./reducer.ts"
import handleNum from "./NumStatus/reducer";
import handleArr from "./ArrStatus/reducer";

// 组合各个模块的reducer
const reducer = combineReducers({
    handleNum,
    handleArr

})




//  创建数据仓库
/*  加入下面window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()的原因是为了让浏览器正常使用的我们的插件 
    redux-dev-tools插件
*/
const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store