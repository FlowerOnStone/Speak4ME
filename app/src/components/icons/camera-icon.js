import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const CameraIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25 * props.scale}
    height={23 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="M9.473.688h6.005c1.026 0 1.905.683 2.198 1.61l.537 1.514h3.662C23.584 3.813 25 5.23 25 6.938v12.5a3.115 3.115 0 0 1-3.125 3.125H3.125C1.367 22.563 0 21.195 0 19.438v-12.5a3.115 3.115 0 0 1 3.125-3.125h3.613l.537-1.514A2.316 2.316 0 0 1 9.473.688ZM12.5 17.875a4.689 4.689 0 0 0 0-9.375 4.658 4.658 0 0 0-4.688 4.688 4.658 4.658 0 0 0 4.688 4.687Z"
    />
  </Svg>
);
export default CameraIcon;
