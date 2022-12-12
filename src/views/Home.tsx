import React, { useState } from 'react';
import MainMenu from "@/components/MainMenu"
import { Breadcrumb, Layout, Button } from 'antd';
import { Outlet } from "react-router-dom";
import { PoweroffOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const logout = () =>{
  
}



const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右侧头部 */}
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={(logout) => enterLoading(2)}
          style={{ float:"right", top:"15px"}}
        />
        </Header>
         {/* 面包屑 */}
         <Breadcrumb style={{ margin: '16px 16px 16px 16px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

        {/* 右侧内容 */}
        <Content style={{ margin: '16px 16px 16px 16px' }}>
           
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat. fksd */}
            {/* 窗口部分 */}
            <Outlet />
          {/* </div> */}
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:"48px" }}>Zayn Design ©2022 Created by Zayn Zhan</Footer>
      </Layout>
    </Layout>
  );
};

export default View;
