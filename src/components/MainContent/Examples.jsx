import { useState } from "react";
import { EXAMPLES } from "../../../data.js";
import Section from "./Section.jsx";
import { Space, Col, Button, Row } from 'antd';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p style={{color:" #a18aba"}}>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content" style={{ marginTop: '20px' }}>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples" bordered={false}>
      <Row gutter={24}>
        <Col span={24}>
          <Space size="middle">
            <Button type={selectedTopic==="components" ? "primary" : "default"} onClick={() => handleSelect("components")}>Components</Button>
            <Button type={selectedTopic==="jsx" ? "primary" : "default"} onClick={() => handleSelect("jsx")}>JSX</Button>
            <Button type={selectedTopic==="state" ? "primary" : "default"} onClick={() => handleSelect("state")}>State</Button>
            <Button type={selectedTopic==="props" ? "primary" : "default"} onClick={() => handleSelect("props")}>Props</Button>
          </Space>
        </Col>
      </Row>
      {tabContent}
    </Section>
  );
}
