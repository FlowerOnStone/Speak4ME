import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function copyIcon(props) {
  return (
    <Svg
      width={26 * props.scale}
      height={30 * props.scale}
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.571 26.25v2.344A1.4 1.4 0 0117.18 30H1.393A1.4 1.4 0 010 28.594V7.03a1.4 1.4 0 011.393-1.406H5.57v17.344c0 1.81 1.458 3.281 3.25 3.281h9.75zm0-20.156V0h-9.75A1.4 1.4 0 007.43 1.406V22.97a1.4 1.4 0 001.392 1.406h15.786A1.4 1.4 0 0026 22.969V7.5h-6.036a1.404 1.404 0 01-1.393-1.406zm7.021-1.818L21.765.412A1.386 1.386 0 0020.78 0h-.351v5.625H26V5.27c0-.373-.147-.73-.408-.994z"
        fill={props.color}
      />
    </Svg>
  );
}

export default copyIcon;
