import React, { useState, useEffect } from "react";
import { Layout, Menu, Card, Col, Row, Statistic } from "antd";
import { Pie, Line, TinyColumn, TinyArea, TinyLine } from "@ant-design/charts";
import {
  PieChartOutlined,
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
    xField: "Date",
    yField: "scales",
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
            </Menu>
          </Layout.Sider>
          <Layout.Content className="p-5">
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="All Users" value={112893} />
                    <TinyColumn data={dataTinyColumn} {...configTinyColumn} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Active Users" value={112893} />
                    <TinyArea data={dataTinyColumn} {...configTinyAres} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Form Submit" value={112893} />
                    <TinyColumn data={dataTinyColumn} {...configTinyColumn} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false}>
                    <Statistic title="Recenly Form" value={112893} />
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
              <Line data={data} {...configLine} />
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
