import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const historyIcon = (props) => (
  <Svg
    width={30 * props.scale}
    height={31 * props.scale}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 0.638916C23.2617 0.638916 30 7.3772 30 15.6389C30 23.9592 23.2617 30.6389 15 30.6389C11.7773 30.6389 8.84766 29.6428 6.38672 28.0022C5.56641 27.3577 5.33203 26.1858 5.91797 25.3655C6.50391 24.4866 7.67578 24.3108 8.55469 24.8967C10.3711 26.1858 12.5977 26.8889 15 26.8889C21.2109 26.8889 26.25 21.8499 26.25 15.6389C26.25 9.42798 21.2109 4.38892 15 4.38892C11.8359 4.38892 9.08203 5.67798 7.03125 7.72876L8.84766 9.48657C9.72656 10.4241 9.08203 11.8889 7.85156 11.8889H1.40625C0.585938 11.8889 0 11.303 0 10.4827V4.03735C0 2.80688 1.46484 2.16235 2.34375 3.04126L4.33594 5.03345C7.08984 2.33813 10.8398 0.638916 14.9414 0.638916H15ZM15 8.13892C15.7617 8.13892 16.4062 8.78345 16.4062 9.54517V15.1116L20.1562 18.8616C20.7422 19.4475 20.7422 20.3264 20.1562 20.8538C19.6289 21.4397 18.75 21.4397 18.2227 20.8538L14.0039 16.635C13.7109 16.4006 13.5938 16.0491 13.5938 15.6389V9.54517C13.5938 8.78345 14.1797 8.13892 15 8.13892Z"
      fill={props.color || ICON_CONSTANTS.DEFAULT_HISTORY_ICON_COLOR}
    />
  </Svg>
);
export default historyIcon;
