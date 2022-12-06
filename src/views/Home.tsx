import React, { useState } from 'react';
import MainMenu from "@/components/MainMenu"
import { Breadcrumb, Layout } from 'antd';
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MainMenu></MainMenu>
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
