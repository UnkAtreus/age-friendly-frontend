import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { Pie, Line, TinyColumn, TinyArea, TinyLine } from "@ant-design/charts";
import { ArrowUpOutlined } from '@ant-design/icons';

import { dataAge } from '../Category/constant'
import Layouts from "../../components/Layouts";

const Home = () => {
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
      <Layouts defaultSelectedKeys={"1"}>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={6}>
              <Card bordered={false}>
                <Statistic title="All Users" value={42} />
                <div className=" h-16 py-2">
                  <div className="flex justify-between">
                    <div className="text-xl">
                      new users:
                    </div>
                    <div className="flex">
                      <div className="flex items-center text-green-600 mr-1">
                        <ArrowUpOutlined />
                      </div>
                      <div className="text-xl text-green-600">
                        5
                      </div>
                    </div>
                  </div>
                </div>
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
      </Layouts>
    </>
  );
};

export default Home;
