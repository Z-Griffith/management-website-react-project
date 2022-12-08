const Store={
    state:{
        sarr:[10, 20, 30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]}, action:{type:string, val:number}){
            newState.sarr.push(action.val)
        },
    },
    // 名字统一管理
    // sarrpush:"sarrpush"
    actionNames:{},
}

// let actionNames = {}

for (let key in Store.actions) {
    Store.actionNames[key] = key
}

export default Store
// 封装的目的： 最终是有利于我们开发或者维护
// 封装的思路是： 将来开发的时候只需要把数据写入和方法写入到这个状态文件中，
// 例如：xxxxStatus/index.ts，而不需要再去操作其它的文件。（我们往这个方向去封装）