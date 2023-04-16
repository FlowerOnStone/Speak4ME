import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const saveIcon = (props) => (
  <Svg
    width={30 * props.scale}
    height={30 * props.scale}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M29.0585 6.55855L23.4415 0.941451C22.8387 0.338654 22.0211 4.45765e-06 21.1686 0H3.21429C1.43906 0 0 1.43906 0 3.21429V26.7857C0 28.5609 1.43906 30 3.21429 30H26.7857C28.5609 30 30 28.5609 30 26.7857V8.83138C30 7.9789 29.6613 7.16134 29.0585 6.55855ZM15 25.7143C12.6331 25.7143 10.7143 23.7955 10.7143 21.4286C10.7143 19.0617 12.6331 17.1429 15 17.1429C17.3669 17.1429 19.2857 19.0617 19.2857 21.4286C19.2857 23.7955 17.3669 25.7143 15 25.7143ZM21.4286 5.32232V12.0536C21.4286 12.4973 21.0688 12.8571 20.625 12.8571H5.08929C4.64551 12.8571 4.28571 12.4973 4.28571 12.0536V5.08929C4.28571 4.64551 4.64551 4.28571 5.08929 4.28571H20.392C20.6051 4.28571 20.8095 4.37036 20.9602 4.52109L21.1932 4.75413C21.2678 4.82874 21.327 4.91732 21.3674 5.01481C21.4078 5.1123 21.4286 5.21679 21.4286 5.32232Z"
      fill={props.color}
    />
  </Svg>
);
export default saveIcon;
