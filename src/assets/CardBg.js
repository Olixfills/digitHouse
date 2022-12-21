import * as React from 'react';
import Svg, {Mask, Rect, G, Circle} from 'react-native-svg';

const CardBg = props => (
  <Svg
    width={317}
    height={159}
    viewBox="0 0 317 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="mask0_1401_169"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={317}
      height={159}>
      <Rect width={317} height={159} rx={20} fill="#1293A9" />
    </Mask>
    <G mask="url(#mask0_1401_169)">
      <Circle cx={52.5} cy={41.5} r={90.5} fill="#1CA1B8" />
      <Circle cx={299.5} cy={180.5} r={76.5} fill="#1CA1B8" />
    </G>
  </Svg>
);

export default CardBg;
