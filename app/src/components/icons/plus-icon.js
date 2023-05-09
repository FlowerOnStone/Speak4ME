import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';

function plusIcon(props) {
  return (
    <Svg
      width={30 * props.scale}
      height={30 * props.scale}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 30a15 15 0 100-30 15 15 0 000 30zm-1.406-9.844v-3.75h-3.75c-.78 0-1.406-.627-1.406-1.406 0-.78.626-1.406 1.406-1.406h3.75v-3.75c0-.78.627-1.406 1.406-1.406.78 0 1.406.626 1.406 1.406v3.75h3.75c.78 0 1.407.627 1.407 1.406 0 .78-.627 1.406-1.407 1.406h-3.75v3.75c0 .78-.627 1.407-1.406 1.407-.78 0-1.406-.627-1.406-1.407z"
        fill={props.color || ICON_CONSTANTS.DEFAULT_PLUS_ICON_COLOR}
      />
    </Svg>
  );
}

export default plusIcon;
