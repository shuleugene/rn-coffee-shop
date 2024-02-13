import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import theme from '../../theme';

type SvgProps = {
  width: number;
  height: number;
  fill?: string;
};

export const SearchIcon: FC<SvgProps> = ({
  width,
  height,
  fill = theme.colors.white,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height} fill="transparent">
      <Path
        d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66666 9.58332 1.66666C5.21107 1.66666 1.66666 5.21108 1.66666 9.58333C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3333 18.3333L16.6667 16.6667"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
