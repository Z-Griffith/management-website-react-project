import { useDispatch, useSelector } from "react-redux"
import numStatus from "@/store/NumStatus"

const View = () => {
    const dispatch = useDispatch()

    // 对num的操作
    // 通过userSelector获取仓库数据, () return 内部的对象
    const {num, sarr} = useSelector((state:RootState) => ({
        // num:state.num
        num:state.handleNum.num,
        sarr:state.handleArr.sarr
    }))

    // 修改仓库数据
    
    const changeNum = () => {
        // dispatch({type:"字符串（认为是一个记号）"}) . type是固定的 val是自定义的
        // dispatch({type:"add1"})
        dispatch({type:"add2", val:10})

    }

    const changeNum2 = () => {
        // dispatch({type:"字符串（认为是一个记号）"}) . type是固定的 val是自定义的
        // dispatch({type:"add1"})
        // 异步的写法： redux-thunk的用法
        // dispatch((dis:Function)=>{
        //     setTimeout(()=>{
        //         dis({type:"add1"})
        //     }, 1000)
        // })
        // dispatch(调用状态管理中的asyncAdd1())
        dispatch(numStatus.asyncActions.asyncAdd1)


    }

    const changeArr = () =>{
        dispatch({type:"sarrpush", val:100})
    }

    //对sarr的操作
    // const {sarr} = useSelector((state:RootState) => ({
    //     sarr:state.handleArr.sarr
    // }))

    return ( 
        <div className="page1">
            <p>这是page1组件</p>
            <p>{num}</p>
            <button onClick={changeNum}>同步调用</button>
            <button onClick={changeNum2}>异步调用</button>
            
            <p>{sarr}</p>
            <button onClick={changeArr}>我是按钮2</button>
        </div>
    )
}

export default View 