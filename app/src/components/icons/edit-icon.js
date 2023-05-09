import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const editIcon = (props) => (
  <Svg
    width={34 * props.scale}
    height={30 * props.scale}
    viewBox="0 0 34 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.7646 4.87009L29.0889 10.1563C29.3132 10.379 29.3132 10.7423 29.0889 10.965L16.1972 23.7644L10.7194 24.368C9.9875 24.4501 9.36771 23.8347 9.45035 23.108L10.0583 17.6695L22.95 4.87009C23.1743 4.64739 23.5403 4.64739 23.7646 4.87009ZM33.3271 3.52803L30.4465 0.668099C29.5493 -0.2227 28.0913 -0.2227 27.1882 0.668099L25.0986 2.74272C24.8743 2.96542 24.8743 3.32878 25.0986 3.55148L30.4229 8.83766C30.6472 9.06036 31.0132 9.06036 31.2375 8.83766L33.3271 6.76304C34.2243 5.86638 34.2243 4.41883 33.3271 3.52803ZM22.6667 20.2833V26.2493H3.77778V7.49561H17.3424C17.5312 7.49561 17.7083 7.41942 17.8441 7.29049L20.2052 4.94628C20.6538 4.50088 20.3351 3.74487 19.7035 3.74487H2.83333C1.2691 3.74487 0 5.00488 0 6.55792V27.187C0 28.74 1.2691 30 2.83333 30H23.6111C25.1753 30 26.4444 28.74 26.4444 27.187V17.9391C26.4444 17.312 25.683 17.0014 25.2344 17.4409L22.8733 19.7851C22.7434 19.9199 22.6667 20.0957 22.6667 20.2833Z"
      fill={props.color || ICON_CONSTANTS.DEFAULT_EDIT_ICON_COLOR}
    />
  </Svg>
);
export default editIcon;
