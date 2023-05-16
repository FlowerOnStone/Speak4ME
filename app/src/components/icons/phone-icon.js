import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const PhoneIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18 * props.scale}
    height={18 * props.scale}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#7C7979"}
      d="m16.967 12.975-.797 3.353c-.1.498-.498.83-.996.83C6.807 17.125 0 10.318 0 1.951c0-.498.299-.896.797-.996L4.15.158c.465-.1.963.166 1.162.598l1.561 3.619c.166.432.066.93-.299 1.195L4.781 7.031a11.53 11.53 0 0 0 5.313 5.28l1.46-1.793c.266-.333.764-.465 1.196-.3l3.62 1.561c.43.233.696.73.597 1.196Z"
    />
  </Svg>
);
export default PhoneIcon;
