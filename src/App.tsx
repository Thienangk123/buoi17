import { useState } from "react";
import { Button, Menu, Layout } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons"; // Icon brands
import "./App.css";
import { MenuItem } from "./type/Types";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const items: MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Option 1",
    href: "https://google.com",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Option 2",
    href: "https://google.com",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
    href: '/products-page',
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    href: "https://google.com",
    children: [
      { key: "5", label: "Option 5", href: "https://google.com" },
      { key: "6", label: "Option 6", href: "https://google.com" },
      { key: "7", label: "Option 7", href: "https://google.com" },
      { key: "8", label: "Option 8", href: "https://google.com" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    href: "https://google.com",
    children: [
      { key: "9", label: "Option 9", href: "https://google.com" },
      { key: "10", label: "Option 10", href: "https://google.com" },
      {
        key: "sub3",
        label: "Submenu",
        href: "https://google.com",
        children: [
          { key: "11", label: "Option 11", href: "https://google.com" },
          { key: "12", label: "Option 12", href: "https://google.com" },
        ],
      },
    ],
  },
  {
    key: "faIcon",
    label: "Font Awesome Icon",
    href: "https://google.com",
    icon: <FontAwesomeIcon icon={faApple} />, // Sử dụng icon Font Awesome
  },
];

const headerStyle: React.CSSProperties = {
  display: 'flex',
  textAlign: "center",
  justifyContent: 'flex-end',
  color: "#333",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute", // Đặt vị trí tuyệt đối
    top: 16, // Cách cạnh trên 16px
    left: 16, // Cách cạnh trái 16px
    zIndex: 1000, // Đảm bảo nút nằm trên các thành phần khác
  };

  return (
    <Layout style={layoutStyle}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={siderStyle}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="logo" disabled style={{ cursor: "default", backgroundColor: "transparent" ,padding:"50px 16px 50px 24px"}}>
            <img
              src="/src/assets/images/image.png"  // Đường dẫn tới logo của công ty
              alt="Company Logo"
              style={{ width: collapsed ? 35 : 100,height: 'auto', margin: "10px auto", display: "flex",
              }} // Điều chỉnh kích thước và căn giữa
            />
          </Menu.Item>
          <br />
          {items.map((item) => {
            return !item.children ? (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.href}>{item.label}</Link>
              </Menu.Item>
            ) : (
              <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                {item.children.map((child) => {
                  return (
                    <Menu.Item key={child.key} icon={child.icon}>
                      <Link to={child.href}>{child.label}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu.SubMenu>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <span style={{ marginRight: "16px" }}>Vũ Thiên Ân</span>
          <img
            src="user-avatar.png"
            alt="User Avatar"
            style={{
              width: 40, // Kích thước của ảnh
              height: 40, // Kích thước của ảnh
              borderRadius: "50%", // Làm tròn ảnh
            }}
          />
        </Header>
        <Content style={{ ...contentStyle, position: "relative" }}>
          <Button type="primary" onClick={toggleCollapsed} style={buttonStyle}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button><Outlet /> {/* Outlet sẽ render các route con tại đây */}
          
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
