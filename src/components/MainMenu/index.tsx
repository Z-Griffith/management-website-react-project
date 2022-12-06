import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
// 登陆请求到数据之后，就可以跟items这个数据进行匹配
const items: MenuItem[] = [
    {
    label: 'Dashboard',
    key: '/page1',
    icon: <PieChartOutlined />,
    // children?: MenuItem[],
    },
    {
        label: 'Moniter',
        key: '/page2',
        icon: <DesktopOutlined />,
        // children?: MenuItem[],
    },
    {
        label: 'User',
        key: 'sub1',
        icon: <UserOutlined />,
        children:[
            {
                label:'User01',
                key:'/sub1/sub101',  
            },
            {
                label:'User02',
                key:'/sub1/sub102',  
            },
            {
                label:'User03',
                key:'/sub1/sub103',  
            },
        ],
    },
    {
        label: 'Team',
        key: 'sub2',
        icon: <TeamOutlined />,
        children:[
            {
                label:'User01',
                key:'/sub2/sub201',  
            },
            {
                label:'User02',
                key:'/sub2/sub202',  
            },
            {
                label:'User03',
                key:'/sub2/sub203',  
            },
        ],
    },
]
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Overview', '/page1', <PieChartOutlined />),
//     getItem('Moniter', '/page2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    // 默认情况下加载两次，因为是开发模式，可以通过注释掉来变成一次
    const currentRoute = useLocation() 
    // console.log("------", currentRoute.pathname)

    const menuClick = (e: { key: string }) => {
        // console.log(e.key);
        // click to go to the related route 编程式导航跳转，利用到一个hook
        navigateTo(e.key)
    }

    // 拿着currentRoute。pathname与items里面每一项children的key值做对比
    // 如果找到相等的就要他的上一级给到openKeys做初始值
    
    let firstOpenKey:string = "";
    //在这里进行对比 ES6 - find
    function findKey(obj:{key:string}) {
        return obj.key === currentRoute.pathname
    }
    // 对比的十多个children
    for (let i=0; i< items.length;i++) {
        if (items[i]!['children'] && items[i]!['children'].length>1 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }

    }
        


    // 设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]); // default open sub
    const handleOpenChange = (keys: string[]) => {
        // 什么时候执行这个函数里面的代码？ 展开和回收某项菜单的时候执行这里的代码
        console.log(keys); // array数组，记录当前哪一项是展开的，用key来记录
        // 把array修改成最后一项，因为只需要一项展开
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            // 刷新以后依旧在当前样式,
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            // 菜单项的数据
            items={items}
            onClick={menuClick}
            // 某项菜单展开和回收的事件
            onOpenChange={handleOpenChange}
            // 当前菜单展开项的keys array
            openKeys={openKeys}
        />

    )



}
export default Comp;