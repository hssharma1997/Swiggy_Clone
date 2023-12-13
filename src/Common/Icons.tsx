import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type CustomIconProps = {
  name: string;
  size: number;
  color: number  | string|  undefined;
  type: string;
};

export const CustomIcons = ({name, size, color, type}: CustomIconProps) => {
  switch (type) {
    case 'FontAwesome':
      return <FontAwesomeIcon name={name} size={size} color={color} />;
    case 'Entypo':
      return <EntypoIcon name={name} size={size} color={color} />;
    case 'FontAwesome5':
      return <FontAwesome5Icon name={name} size={size} color={color} />;
  }
};
