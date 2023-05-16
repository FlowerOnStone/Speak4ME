import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const LogoutIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21 * props.scale}
    height={19 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "red"}
      d="M3.75 18.25C1.64 18.25 0 16.57 0 14.5v-10C0 2.43 1.64.75 3.75.75h2.5C6.914.75 7.5 1.336 7.5 2c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5Zm15.938-9.414c.39.351.39 1.016 0 1.328l-5.625 5.313c-.274.273-.665.312-1.016.195a.937.937 0 0 1-.547-.86V12h-5c-.703 0-1.25-.547-1.25-1.25v-2.5C6.25 7.586 6.797 7 7.5 7h5V4.187c0-.351.195-.703.547-.859.351-.117.742-.078 1.015.195l5.626 5.313Z"
    />
  </Svg>
);
export default LogoutIcon;
