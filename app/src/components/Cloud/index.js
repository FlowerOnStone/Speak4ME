import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

export default function Cloud() {
  const rectangle1Width = 120;
  const rectangle1Height = 80;
  const rectangle2Width = 100;
  const rectangle2Height = 50;
  const overlap = 20;
  const startX = (rectangle1Width - rectangle2Width) / 2;
  const startY = (rectangle1Height - rectangle2Height) / 2;

  return (
    <View>
      <Svg height={rectangle1Height} width={rectangle1Width}>
        <Rect
          x="0"
          y="0"
          width={rectangle1Width}
          height={rectangle1Height}
          rx="20"
          fill="#fff"
          stroke="#000"
          strokeWidth="1"
        />
        <Rect
          x={startX}
          y={startY}
          width={rectangle2Width}
          height={rectangle2Height}
          rx="15"
          fill="#fff"
          stroke="#000"
          strokeWidth="1"
        />
        <Rect
          x={startX}
          y={startY + overlap}
          width={rectangle2Width}
          height={rectangle2Height - overlap}
          fill="#fff"
        />
      </Svg>
    </View>
  );
}