import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const DarkModeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20 * props.scale}
    height={23 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="M.063 11.625C.063 5.619 4.944.687 10.95.687c.586 0 1.465.098 2.002.196a.522.522 0 0 1 .147.976 8.574 8.574 0 0 0-4.297 7.422c0 5.371 4.834 9.424 10.156 8.447.488-.097.781.44.488.83a10.974 10.974 0 0 1-8.496 4.005C4.945 22.563.062 17.68.062 11.624Z"
    />
  </Svg>
);
export default DarkModeIcon;
