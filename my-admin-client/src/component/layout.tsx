import React from 'react';
import {
    BarChartOutlined, DatabaseOutlined,
        FileSearchOutlined,
    FundViewOutlined,
    ShoppingCartOutlined,

} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const {Content, Sider} = Layout;

const layoutStyle: React.CSSProperties = {

    minHeight: '100vh',
    minWidth: '100%',
};

const items: MenuProps['items'] = [
    { key: '/stats', icon: <BarChartOutlined/>, label: "Статистика дня" },
    { key: '/sales', icon: <ShoppingCartOutlined/>, label: "Продаж" },
    { key: '/history', icon: <FileSearchOutlined/>, label: "Історія чеків" },
    { key: '/stock', icon: <DatabaseOutlined/>, label: "Склад", children: [
            { key: '/stats', icon: <BarChartOutlined/>, label: "Статистика дня" },
            { key: '/sales', icon: <FileSearchOutlined/>, label: "Історія чеків"}
        ] },
    { key: '/reports', icon: <FundViewOutlined/>, label: "Звітність" },
];

const Laut: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

  //  const currentYear = new Date().getFullYear();

    const navigate = useNavigate();

    return (
        <Layout style={layoutStyle}>
            <Sider
                //    collapsible
                // collapsed={collapsed}
                collapsedWidth="0"
                // trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onCollapse={setCollapsed}

            >
                <div className="demo-logo-vertical"/>
                <Menu  theme="dark" mode="inline" defaultSelectedKeys={['2']} items={items} onClick={(e) => navigate(e.key)}/>
            </Sider>
            <Layout>
                <Content style={{/*gridArea:'div',*/ margin: '16px' }}>
                    <div style={{  padding: 24, height: "100%", background: colorBgContainer, borderRadius: borderRadiusLG }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};


export default Laut;