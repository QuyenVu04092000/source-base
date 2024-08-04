import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ className, text }: { className: string; text: string }) => {
  return (
    <Text style={[{ fontFamily: 'Roboto_400Regular' }]} className={`${className}`}>
      {text}
    </Text>
  );
};

export default CustomText;
