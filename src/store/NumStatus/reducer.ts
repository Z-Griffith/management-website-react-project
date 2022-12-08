import handleNum from "./index";
// 就是用来管理数据的

// const defaultState = {
//     // num:NumStatus.state.num //数据多了需要写很多次
//     ...handleNum.state, //解构写法
// }

let reducer = (state = {...handleNum.state}, action:{type:string}) =>{
    // 调用dispatch执行这里的代码
    // console.log("执行了reducer")
    let newState = JSON.parse(JSON.stringify(state))

    for (let key in handleNum.actionNames){
        //判断是不是相等
        if (action.type === handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]](newState,action)
        }
    }

    return newState

}

export default reducer 

    // 思路：switch的做法是拿着action.type和case后面的每一个进行对比，这种做法很像遍历
    //那我们就把case后面的这些值做成对象， actionNames
    // switch(action.type){
    //     case handleNum.add1:
    //         // newState.num++;
    //         handleNum.action[handleNum.add1](newState, action)
    //         break;
    //     case handleNum.add2:
    //         // newState.num+=action.val;
    //         handleNum.action[handleNum.add2](newState, action)
    //         break;
    //     default:
    //         break;
    // }
    // 【优化】拿着action.type和actionNames进行每一项的对比，如果是相等的就调用

