import { Card } from 'antd';

export default function MainContent({ image, title, description, ...props }) {
  return (
    <Card
      cover={<img alt={title} src={image} />}
      {...props}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
}