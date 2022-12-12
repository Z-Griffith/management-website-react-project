import { TaobaoSquareFilled, WindowsFilled } from "@ant-design/icons";
import reduxThunk from "redux-thunk"
import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux"
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
// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE_这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose//rt
// 把仓库数据，浏览器redux-dev-TaobaoSquareFilled,还有reduxThunk插件关联在store中
const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));
// const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
//     window.__REDUX_DEVTOOLS_EXTENSION__());

export default store