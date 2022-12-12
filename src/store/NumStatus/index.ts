const Store={
    state:{
        // 数据放置区域
        num:20
    },
    actions:{ // 此处只放同步的方法
        // 方法放置区域
        add1(newState:{num:number}, action:{type:string}){
            newState.num ++;
            
        },
        add2(newState:{num:number}, action:{type:string, val:number}){
                       //做异步 
            newState.num += action.val;
            // newState.num+=action.val
            // setTimeout(() => {
            //     newState.num++
            // }, 1000)
        },
        // add3(newSta)
    },
    // 优化redux-thunk的异部写法（模仿VueX写法 )
    // asyncActions

    asyncActions:{
        asyncAdd1(dispatch:Function){
            setTimeout(()=>{
                dispatch({type:"add1"})
            }, 1000)
        }

    },


    // 名字统一管理
    // add1:"add1",
    // add2:"add2"
    // actionNames:{
    //     add1:"add1",
    //     add2:"add2",
    // }
    actionNames:{}
}
// 我们现在想做actionNames自动升层，不需要我每一次添加一个方法，都要在actionNames手动添加值

let actionNames = {}
// actionnames 有多少对键值对，取决于action里面有多少个函数，所以遍历store。actions，给actionNames添加键值对
for (let key in Store.actions) {
    actionNames[key] = key
}
Store.actionNames=actionNames

export default Store
// 封装的目的： 最终是有利于我们开发或者维护
// 封装的思路是： 将来开发的时候只需要把数据写入和方法写入到这个状态文件中，
// 例如：xxxxStatus/index.ts，而不需要再去操作其它的文件。（我们往这个方向去封装）