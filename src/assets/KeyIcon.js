import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const KeyIcon = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M15.75 12V9H9" stroke="#1293A9" strokeLinecap="square" />
    <Path
      d="M5.25 12C6.90685 12 8.25 10.6569 8.25 9C8.25 7.34315 6.90685 6 5.25 6C3.59315 6 2.25 7.34315 2.25 9C2.25 10.6569 3.59315 12 5.25 12Z"
      stroke="#1293A9"
      strokeLinecap="square"
    />
    <Path d="M12.75 11.25V9" stroke="#1293A9" strokeLinecap="square" />
  </Svg>
);

export default KeyIcon;
