import React, { useEffect, useState } from "react";
import styles from "./index.less";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import { IRouteComponentProps, Link } from "umi";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IMenu {
  name: string;
  path: string | undefined;
  icon?: string;
}

const BasicLayout: React.FC<IRouteComponentProps> = props => {
  const { children, routes } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<IMenu[]>([]);


  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    const routesList = routes[1].routes;
    const menus = routesList?.map(item => {
      const menuItem:IMenu  = {
        name: item.name,
        path: item.path,
        icon: item?.icon,
      }
      return menuItem;
    })
    console.log('menus', menus)
    setMenuList(menus || []);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ 
          background: "#FBB6CB",
          color:'#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* <div>千磨万击还坚劲</div>
        <div>任尔东西南北风</div> */}
      </Header>
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{ background: '#FBB6CB', color:'#FFFFFF', }}
        >
          <Menu style={{ background: '#FBB6CB', color:'#FFFFFF', }} defaultSelectedKeys={["1"]} mode="inline">
            {
              menuList.map(item => {
                return (
                  <Menu.Item key={item.name}>
                    <PieChartOutlined />
                    <Link to={item.path!} style={{ color: '#FFFFFF', marginLeft: '10px' }}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ background: '#FBB6CB' }}>
          <Content
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: '40PX',
              background: '#FBB6CB',
              border: '2px solid #FFFFFF',
              borderRadius: '10px',
              padding: '10px',
              color: '#FFFFFF'
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
