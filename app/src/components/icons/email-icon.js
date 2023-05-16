import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const EmailIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17 * props.scale}
    height={13 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#7C7979"}
      d="M15.406.25C16.27.25 17 .98 17 1.844c0 .531-.266.996-.664 1.295L9.13 8.55a1.047 1.047 0 0 1-1.295 0L.63 3.139A1.59 1.59 0 0 1 0 1.844C0 .98.697.25 1.594.25h13.812Zm-8.2 9.164a2.142 2.142 0 0 0 2.556 0L17 3.97v6.906A2.118 2.118 0 0 1 14.875 13H2.125A2.098 2.098 0 0 1 0 10.875V3.969l7.205 5.445Z"
    />
  </Svg>
);
export default EmailIcon;
