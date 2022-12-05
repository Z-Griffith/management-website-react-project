import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Overview', '/page1', <PieChartOutlined />),
    getItem('Moniter', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Comp: React.FC = () => {
    const navigateTo = useNavigate()

    const menuClick = (e: { key: string }) => {
        console.log(e.key);
        //click to go to the related route 编程式导航跳转，利用到一个hook
        navigateTo(e.key)
    }

    const [openKeys, setOpenKeys] = useState(['']); // default open sub
    const handleOpenChange = (keys: string[]) => {
        // 什么时候执行这个函数里面的代码？ 展开和回收某项菜单的时候执行这里的代码
        console.log(keys); // array数组，记录当前哪一项是展开的，用key来记录
        // 把array修改成最后一项，因为只需要一项展开
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['/page1']}
            mode="inline"
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