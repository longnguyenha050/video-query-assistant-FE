import { Card } from 'antd';

export default function Section({ title, children, ...props }) {
  return (
    <Card title={title} {...props}>
      {children}
    </Card>
  );
}
