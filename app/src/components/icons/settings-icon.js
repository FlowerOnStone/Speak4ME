import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38 * props.scale}
    height={40 * props.scale}
    viewBox="0 0 38 40"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || ICON_CONSTANTS.DEFAULT_SETTING_ICON_COLOR}
      d="M37.895 13.018c.252.68.039 1.438-.504 1.922l-3.41 3.08c.087.648.134 1.312.134 1.984 0 .672-.047 1.336-.134 1.985l3.41 3.078c.543.485.756 1.243.504 1.923a19.31 19.31 0 0 1-1.245 2.68l-.37.633c-.52.86-1.102 1.672-1.74 2.438-.464.562-1.236.75-1.93.531l-4.385-1.383a15.18 15.18 0 0 1-3.465 1.985l-.984 4.462c-.158.71-.709 1.273-1.433 1.39a20.504 20.504 0 0 1-6.693 0c-.725-.117-1.276-.68-1.434-1.39l-.984-4.462a15.178 15.178 0 0 1-3.465-1.985l-4.378 1.39c-.693.22-1.465.024-1.93-.53a19.882 19.882 0 0 1-1.74-2.438l-.37-.633c-.48-.86-.897-1.75-1.244-2.68-.252-.68-.039-1.438.504-1.923l3.41-3.078a15.215 15.215 0 0 1-.134-1.993c0-.672.047-1.336.134-1.985L.609 14.94c-.543-.484-.756-1.242-.504-1.922.347-.93.764-1.82 1.244-2.68l.37-.633c.52-.86 1.103-1.672 1.74-2.438.465-.563 1.237-.75 1.93-.531l4.386 1.383a15.181 15.181 0 0 1 3.465-1.985l.984-4.462c.158-.71.709-1.273 1.433-1.39A19.668 19.668 0 0 1 19.004 0c1.142 0 2.26.094 3.347.273.724.118 1.275.68 1.433 1.391l.984 4.462c1.244.508 2.41 1.18 3.465 1.985l4.386-1.383c.693-.219 1.464-.024 1.929.531.638.766 1.22 1.579 1.74 2.438l.37.633c.48.86.898 1.75 1.245 2.68l-.008.008ZM19.004 26.255c1.67 0 3.273-.659 4.454-1.83a6.227 6.227 0 0 0 1.846-4.421 6.227 6.227 0 0 0-1.846-4.42 6.324 6.324 0 0 0-4.454-1.831c-1.67 0-3.273.658-4.455 1.83a6.227 6.227 0 0 0-1.845 4.42c0 1.659.664 3.249 1.845 4.421a6.324 6.324 0 0 0 4.455 1.831Z"
    />
  </Svg>
);
export { SvgComponent as settingsIcon };
