import React, { useState, useEffect } from "react";
import { Layout, Menu, Card, Col, Row, Statistic } from "antd";
import { Pie, Line, TinyColumn, TinyArea, TinyLine } from "@ant-design/charts";
import {
  PieChartOutlined,
  BarChartOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

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

  var dataPie = [
    {
      type: "ชาย",
      value: 125,
    },
    {
      type: "หญิง",
      value: 175,
    },
  ];
  var dataPie2 = [
    {
      type: "ภาคเหนือ",
      value: 80,
    },
    {
      type: "ภาคใต้",
      value: 65,
    },
    {
      type: "ภาคตะวันออก",
      value: 12,
    },
    {
      type: "ภาคตะวันออกเฉียงเหนือ",
      value: 15,
    },
    {
      type: "ภาคกลาง",
      value: 125,
    },
  ];

  var configPie = {
    appendPadding: 10,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
  };

  var configLine = {
    padding: "auto",
    xField: "age",
    yField: "count",
    xAxis: { tickCount: 5 },
    smooth: true,
  };


  var dataTinyColumn = [274, 337, 81, 497, 666, 219, 269, 200, 233, 546, 234, 86, 94, 105];
  var configTinyColumn = {
    height: 64,
    autoFit: true,
    tooltip: {
      customContent: function customContent(x, data) {
        var _data$, _data$$data;
        return 'count'
          .concat(x, ': ')
          .concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
                ? void 0
                : _data$$data.y.toFixed(2),
          );
      },
    },
  };

  var configTinyAres = {
    height: 64,
    autoFit: true,
    smooth: true,
    areaStyle: { fill: '#d6e3fd' },
  };

  var configTinyLine = {
    height: 64,
    autoFit: true,
    smooth: true,
  };

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
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                DashBoard
              </Menu.Item>
              <Menu.SubMenu key="2" icon={<BarChartOutlined />} title="Category">
                <Menu.Item key="21">Access to daylight</Menu.Item>
                <Menu.Item key="22">Family zone in patient room</Menu.Item>
                <Menu.Item key="23">Indoor lighting</Menu.Item>
                <Menu.Item key="24">Noise reducing finishes</Menu.Item>
                <Menu.Item key="25">Single bedroom</Menu.Item>
                <Menu.Item key="26">Views of nature</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout.Content className="p-5">
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="All Users" value={42} />
                    <TinyColumn data={dataTinyColumn} {...configTinyColumn} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Active Users" value={6} />
                    <TinyArea data={dataTinyColumn} {...configTinyAres} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Form Submit" value={360} />
                    <TinyColumn data={dataTinyColumn} {...configTinyColumn} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Recenly Form" value={100} />
                    <TinyLine data={dataTinyColumn} {...configTinyLine} />
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="bg-white p-6 my-4">
              <Row gutter={16}>
                <Col span={12}>
                  <Pie data={dataPie} {...configPie} />
                </Col>
                <Col span={12}>
                  <Pie data={dataPie2} {...configPie} />
                </Col>
              </Row>
            </div>
            <div className="bg-white p-6 my-4">
              <Line data={dataAge} {...configLine} />
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

export default Home;
