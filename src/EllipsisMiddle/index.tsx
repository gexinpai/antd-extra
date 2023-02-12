import { Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

interface IProps {
  suffixCount: number;
  children: string;
}

const EllipsisMiddle: React.FC<{
  suffixCount: number;
  children: string;
}> = ({ suffixCount, children, ...extraProps }: IProps) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }} {...extraProps}>
      {start}
    </Text>
  );
};

export default EllipsisMiddle;
