import { CSSProperties, FC, Fragment } from 'react';
import * as reactSpinners from 'react-spinners';

type SpinnerType =
  | 'BarLoader'
  | 'BeatLoader'
  | 'BounceLoader'
  | 'CircleLoader' 
  | 'ClimbingBoxLoader'
  | 'ClipLoader'
  | 'ClockLoader'
  | 'DotLoader'
  | 'FadeLoader'
  | 'GridLoader'
  | 'HashLoader'
  | 'MoonLoader'
  | 'PacmanLoader'
  | 'PropagateLoader'
  | 'PulseLoader'
  | 'PuffLoader'
  | 'RingLoader'
  | 'RiseLoader'
  | 'RotateLoader'
  | 'ScaleLoader'
  | 'SkewLoader'
  | 'SquareLoader'
  | 'SyncLoader'
  | 'none';

export interface SpinnerProps {
  spinnerType?: SpinnerType;
  spinnerCss?: CSSProperties;
  color?: string;
  size?: string;
  aspectRatio?: string;
  wrapperHeight?: string;
}

export const BaseSpinner: FC<SpinnerProps> = ({
  spinnerType = 'ClipLoader',
  spinnerCss = {},
  color = 'blue',
  size = '2rem',
  aspectRatio = '16/9',
  wrapperHeight = '',
}) => {
  const Spinner =
    spinnerType === 'none' ? Fragment : reactSpinners[spinnerType];

  return (
    //Spinner Wrapper
    <div
      style={{
        width: '100%',
        aspectRatio: aspectRatio,
        height: wrapperHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner {...{ color, cssOverride: spinnerCss, size }} />
    </div>
  );
};
