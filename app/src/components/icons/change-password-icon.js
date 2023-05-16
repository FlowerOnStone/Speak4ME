import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const ChangePasswordIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21 * props.scale}
    height={24 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="M4.031 9.5V7.344c0-3.55 2.875-6.469 6.469-6.469 3.549 0 6.469 2.92 6.469 6.469V9.5h.718a2.895 2.895 0 0 1 2.875 2.875V21a2.866 2.866 0 0 1-2.875 2.875H3.313A2.838 2.838 0 0 1 .438 21v-8.625A2.866 2.866 0 0 1 3.312 9.5h.72Zm2.875 0h7.188V7.344A3.604 3.604 0 0 0 10.5 3.75a3.576 3.576 0 0 0-3.594 3.594V9.5Z"
    />
  </Svg>
);
export default ChangePasswordIcon;
