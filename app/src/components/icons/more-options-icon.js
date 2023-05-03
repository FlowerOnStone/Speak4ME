import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
const moreOptionIcon = (props) => (
  <Svg
    width={8 * props.scale}
    height={30 * props.scale}
    viewBox="0 0 8 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.88889 22.2222C2.85749 22.2222 1.86834 22.6319 1.13903 23.3613C0.409721 24.0906 0 25.0797 0 26.1111C0 27.1425 0.409721 28.1317 1.13903 28.861C1.86834 29.5903 2.85749 30 3.88889 30C4.92028 30 5.90943 29.5903 6.63874 28.861C7.36805 28.1317 7.77777 27.1425 7.77777 26.1111C7.77777 25.0797 7.36805 24.0906 6.63874 23.3613C5.90943 22.6319 4.92028 22.2222 3.88889 22.2222ZM3.88889 11.1111C2.85749 11.1111 1.86834 11.5208 1.13903 12.2501C0.409721 12.9794 0 13.9686 0 15C0 16.0314 0.409721 17.0206 1.13903 17.7499C1.86834 18.4792 2.85749 18.8889 3.88889 18.8889C4.92028 18.8889 5.90943 18.4792 6.63874 17.7499C7.36805 17.0206 7.77777 16.0314 7.77777 15C7.77777 13.9686 7.36805 12.9794 6.63874 12.2501C5.90943 11.5208 4.92028 11.1111 3.88889 11.1111ZM7.77777 3.88889C7.77777 2.85749 7.36805 1.86834 6.63874 1.13903C5.90943 0.409721 4.92028 0 3.88889 0C2.85749 0 1.86834 0.409721 1.13903 1.13903C0.409721 1.86834 0 2.85749 0 3.88889C0 4.92029 0.409721 5.90944 1.13903 6.63875C1.86834 7.36806 2.85749 7.77778 3.88889 7.77778C4.92028 7.77778 5.90943 7.36806 6.63874 6.63875C7.36805 5.90944 7.77777 4.92029 7.77777 3.88889Z"
      fill={props.color || ICON_CONSTANTS.DEFAULT_MORE_OPTIONS_ICON_COLOR}
    />
  </Svg>
);
export default moreOptionIcon;
