import { Row, Col } from 'antd';
import MainContent from './MainContent.jsx';
import Section from './Section.jsx';
import { myData } from '../../../data.js';

export default function MainContents() {
  return (
    <Section title="Khái niệm chính trong React" id="core-concepts" bordered={false} >
      <Row gutter={[16, 24]}>
        {myData.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.title}>
            <MainContent {...item} id="core-concepts" />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
