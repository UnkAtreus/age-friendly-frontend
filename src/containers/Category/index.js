import React, { useState, useEffect } from "react";
import { Layout, Menu, Table } from "antd";
import { Line } from "@ant-design/charts";
import { PieChartOutlined, BarChartOutlined } from "@ant-design/icons";
import { Link, useRouteMatch, useParams } from "react-router-dom";

const Category = () => {
  const [collapsed, setCollapsed] = useState(false);

  const match = useRouteMatch();
  const url_param = useParams();

  useEffect(() => {
    console.log(match);
    console.log(url_param);
  }, [match, url_param]);

  const category_data = [
    {
      name: "Access to daylight",
      param: "AccessToDayLight",
    },
    {
      name: "Family zone in patient room",
      param: "FamilyZoneInPatientRoom",
    },
    {
      name: "Indoor lighting",
      param: "IndoorLighting",
    },
    {
      name: "Noise reducing finishes",
      param: "NoiseReducingFinishes",
    },
    {
      name: "Single bedroom",
      param: "SingleBedroom",
    },
    {
      name: "Views of nature",
      param: "ViewsOfNature",
    },
  ];

  const category = category_data.findIndex(
    (obj) => obj.param === url_param.category
  );

  var dataAge = [
    {
      age: "20",
      count: 10,
    },
    {
      age: "21",
      count: 8,
    },
    {
      age: "22",
      count: 5,
    },
    {
      age: "23",
      count: 2,
    },
    {
      age: "24",
      count: 2,
    },
    {
      age: "25",
      count: 4,
    },
    {
      age: "26",
      count: 4,
    },
    {
      age: "27",
      count: 8,
    },
    {
      age: "28",
      count: 2,
    },
    {
      age: "29",
      count: 1,
    },
    {
      age: "30",
      count: 6,
    },
    {
      age: "31",
      count: 4,
    },
    {
      age: "32",
      count: 10,
    },
    {
      age: "33",
      count: 7,
    },
    {
      age: "34",
      count: 16,
    },
    {
      age: "35",
      count: 22,
    },
    {
      age: "36",
      count: 14,
    },
    {
      age: "37",
      count: 13,
    },
    {
      age: "38",
      count: 18,
    },
    {
      age: "39",
      count: 19,
    },
    {
      age: "40",
      count: 11,
    },
    {
      age: "41",
      count: 14,
    },
    {
      age: "42",
      count: 16,
    },
    {
      age: "43",
      count: 12,
    },
    {
      age: "44",
      count: 12,
    },
    {
      age: "45",
      count: 9,
    },
    {
      age: "46",
      count: 17,
    },
    {
      age: "47",
      count: 12,
    },
    {
      age: "48",
      count: 15,
    },
    {
      age: "49",
      count: 16,
    },
    {
      age: "50",
      count: 6,
    },
    {
      age: "51",
      count: 9,
    },
    {
      age: "52",
      count: 16,
    },
    {
      age: "53",
      count: 13,
    },
    {
      age: "54",
      count: 17,
    },
    {
      age: "55",
      count: 16,
    },
    {
      age: "56",
      count: 11,
    },
    {
      age: "57",
      count: 15,
    },
    {
      age: "58",
      count: 13,
    },
    {
      age: "59",
      count: 23,
    },
    {
      age: "60",
      count: 19,
    },
    {
      age: "61",
      count: 12,
    },
    {
      age: "62",
      count: 14,
    },
    {
      age: "63",
      count: 17,
    },
    {
      age: "64",
      count: 13,
    },
    {
      age: "65",
      count: 17,
    },
    {
      age: "66",
      count: 23,
    },
    {
      age: "67",
      count: 9,
    },
    {
      age: "68",
      count: 8,
    },
    {
      age: "69",
      count: 4,
    },
    {
      age: "70",
      count: 3,
    },
    {
      age: "71",
      count: 1,
    },
    {
      age: "72",
      count: 1,
    },
    {
      age: "73",
      count: 2,
    },
    {
      age: "74",
      count: 0,
    },
    {
      age: "75",
      count: 5,
    },
    {
      age: "76",
      count: 3,
    },
    {
      age: "77",
      count: 0,
    },
    {
      age: "78",
      count: 1,
    },
    {
      age: "79",
      count: 2,
    },
    {
      age: "80",
      count: 0,
    },
    {
      age: "81",
      count: 0,
    },
    {
      age: "82",
      count: 0,
    },
    {
      age: "83",
      count: 0,
    },
    {
      age: "84",
      count: 1,
    },
    {
      age: "85",
      count: 0,
    },
    {
      age: "86",
      count: 1,
    },
    {
      age: "87",
      count: 0,
    },
    {
      age: "88",
      count: 0,
    },
    {
      age: "89",
      count: 0,
    },
    {
      age: "90",
      count: 1,
    },
  ];

  var configLine = {
    padding: "auto",
    xField: "age",
    yField: "count",
    xAxis: { tickCount: 5 },
    smooth: true,
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Min",
      dataIndex: "min",
      key: "min",
    },
    {
      title: "Max",
      dataIndex: "max",
      key: "max",
    },
    {
      title: "Avg",
      dataIndex: "avg",
      key: "avg",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      min: 0.05,
      max: 1.0,
      avg: 0.29,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      min: 0.05,
      max: 1.0,
      avg: 0.574,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      min: 0.01,
      max: 1.0,
      avg: 0.39,
    },
  ];

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
            <Menu defaultSelectedKeys={url_param.category} mode="inline">
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
          <Layout.Content className="p-5">
            <div className=" text-2xl p-6 my-4">
              {category_data[category].name}
            </div>
            <div className="bg-white p-6 my-4">
              <Line data={dataAge} {...configLine} />
            </div>
            <div className="bg-white p-6 my-4">
              <Table columns={columns} dataSource={data} />
            </div>
          </Layout.Content>
        </Layout>
        <Layout.Footer className="text-center">
          Age+Friendly ©2021 Created by Kittipat Dechkul
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default Category;
