import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { PieChartOutlined, BarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Layouts = ({ defaultSelectedKeys, defaultOpenKeys, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="min-h-screen">
        <Layout.Header className="p-0 bg-primary-200" />
        <Layout className="site-layout">
          <Layout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            theme="light"
          >
            <Menu
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              mode="inline"
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">DashBoard</Link>
              </Menu.Item>
              <Menu.SubMenu
                key="2"
                icon={<BarChartOutlined />}
                title="Category"
              >
                <Menu.Item key="AccessToDayLight">
                  <Link to="/category/AccessToDayLight">
                    Access to daylight
                  </Link>
                </Menu.Item>
                <Menu.Item key="FamilyZoneInPatientRoom">
                  <Link to="/category/FamilyZoneInPatientRoom">
                    Family zone in patient room
                  </Link>
                </Menu.Item>
                <Menu.Item key="IndoorLighting">
                  <Link to="/category/IndoorLighting">Indoor lighting</Link>
                </Menu.Item>
                <Menu.Item key="NoiseReducingFinishes">
                  <Link to="/category/NoiseReducingFinishes">
                    Noise reducing finishes
                  </Link>
                </Menu.Item>
                <Menu.Item key="SingleBedroom">
                  <Link to="/category/SingleBedroom">Single bedroom</Link>
                </Menu.Item>
                <Menu.Item key="ViewsOfNature">
                  <Link to="/category/ViewsOfNature">Views of nature</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout.Content className="p-5">{children}</Layout.Content>
        </Layout>
        <Layout.Footer className="text-center">
          Age+Friendly ©2021 Created by Kittipat Dechkul
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default Layouts;
