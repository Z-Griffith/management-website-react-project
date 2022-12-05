import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

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

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()

    const menuClick = (e:{key:string}) =>{
        console.log(e.key);
        //click to go to the related route 编程式导航跳转，利用到一个hook
        navigateTo(e.key)
    }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
         {/* 面包屑 */}
         <Breadcrumb style={{ margin: '16px 16px 16px 16px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        {/* 右侧头部 */}
        <Header className="site-layout-background" style={{ padding: 0 }} />
        {/* 右侧内容 */}
        <Content style={{ margin: '16px 16px 16px 16px' }}>
           
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat. fksd
            {/* 窗口部分 */}
            <Outlet />

          </div>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:"48px" }}>Zayn Design ©2022 Created by Zayn Zhan</Footer>
      </Layout>
    </Layout>
  );
};

export default View;
