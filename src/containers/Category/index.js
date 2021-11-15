import React, { useEffect } from "react";
import { Table } from "antd";
import { Line } from "@ant-design/charts";
import { useRouteMatch, useParams } from "react-router-dom";
import { category_data, dataAge, data, columns } from "./constant";
import { configLine } from "./config";
import Layouts from "../../components/Layouts";

const Category = () => {
  const match = useRouteMatch();
  const url_param = useParams();

  useEffect(() => {
    console.log(match);
    console.log(url_param);
  }, [match, url_param]);

  const category = category_data.findIndex(
    (obj) => obj.param === url_param.category
  );

  return (
    <>
      <Layouts defaultSelectedKeys={url_param.category} defaultOpenKeys={"2"}>
        <div className=" text-2xl p-6 my-4">{category_data[category].name}</div>
        <div className="bg-white p-6 my-4">
          <Line data={dataAge} {...configLine} />
        </div>
        <div className="bg-white p-6 my-4">
          <Table columns={columns} dataSource={data} />
        </div>
      </Layouts>
    </>
  );
};

export default Category;
