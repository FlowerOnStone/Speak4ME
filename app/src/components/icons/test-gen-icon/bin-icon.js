import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {ICON_CONSTANTS} from '../../../constants/icon-constants';

const SVGComponent = (props) => (
    <Svg
        width={25}
        height={30}
        viewBox="0 0 25 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.54464 1.03711L7.14286 1.875H1.78571C0.797991 1.875 0 2.71289 0 3.75C0 4.78711 0.797991 5.625 1.78571 5.625H23.2143C24.202 5.625 25 4.78711 25 3.75C25 2.71289 24.202 1.875 23.2143 1.875H17.8571L17.4554 1.03711C17.154 0.398438 16.5346 0 15.8594 0H9.14063C8.4654 0 7.84598 0.398438 7.54464 1.03711ZM23.2143 7.5H1.78571L2.96875 27.3633C3.05804 28.8457 4.22991 30 5.64174 30H19.3583C20.7701 30 21.942 28.8457 22.0312 27.3633L23.2143 7.5Z"
            fill={ICON_CONSTANTS.COLOR}
        />
    </Svg>
);
export default SVGComponent;
