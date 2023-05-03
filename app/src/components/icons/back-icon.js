import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const BackIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25 * props.scale}
    height={40 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || ICON_CONSTANTS.DEFAULT_BACK_ICON_COLOR}
      d="M.663 18.445 18.997.644a2.312 2.312 0 0 1 3.201 0l2.139 2.076c.883.858.884 2.246.004 3.105L9.81 20 24.34 34.175c.88.859.879 2.247-.004 3.105l-2.138 2.076a2.312 2.312 0 0 1-3.202 0L.663 21.554a2.154 2.154 0 0 1 0-3.109Z"
    />
  </Svg>
);
export default BackIcon;
