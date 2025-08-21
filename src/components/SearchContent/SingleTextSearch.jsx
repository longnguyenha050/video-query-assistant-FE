import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Form, InputNumber, Select, Switch, Row, Col } from "antd";

const SingleTextSearch = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <SearchBar />
      <Form
        layout="inline"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Top K">
          <InputNumber style={{ width: "120px" }} min="0" defaultValue="10"/>
        </Form.Item>
        
        <Form.Item label="Select">
          <Select style={{ width: "120px" }}>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Clip" valuePropName="checked">
          <Switch />
        </Form.Item>
        
        <Form.Item label="Clipv2" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </>
  );
};

export default SingleTextSearch;
