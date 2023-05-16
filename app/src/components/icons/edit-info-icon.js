import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const EditInfoIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29 * props.scale}
    height={23 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="M10.332 11.75c-3.008 0-5.457-2.45-5.457-5.5 0-3.008 2.45-5.5 5.457-5.5 3.008 0 5.5 2.492 5.5 5.5 0 3.05-2.492 5.5-5.5 5.5Zm2.191 2.063c2.02 0 3.825.816 5.157 2.105l-1.977 1.934c-.3.3-.473.687-.558 1.117l-.645 3.05c-.043.258-.043.516.043.731H2.211c-.816 0-1.461-.645-1.461-1.46 0-4.126 3.309-7.477 7.434-7.477h4.34Zm4.168 5.027 5.372-5.371 3.093 3.094-5.37 5.37a.878.878 0 0 1-.388.215l-3.093.602c-.258.086-.516-.172-.43-.43l.602-3.093a.878.878 0 0 1 .214-.387Zm11.086-7.09c.602.602.602 1.59 0 2.191l-1.633 1.633-3.093-3.094 1.633-1.632a1.556 1.556 0 0 1 2.191 0l.902.902Z"
    />
  </Svg>
);
export default EditInfoIcon;
