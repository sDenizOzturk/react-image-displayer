import { FC, ReactNode } from 'react';

import { BaseSpinner, SpinnerProps } from './BaseSpinner';
import { motion } from 'framer-motion';
import {
  AnimationDuration,
  EnterAnimation,
  FramerMotionProps,
  getFramerMotionProps,
} from '../utils/enterAnimation';

interface ItemDisplayerProps {
  spinner?: SpinnerProps;
  loaded?: boolean;
  loadedInStyle?: boolean;
  enterAnimation?: [EnterAnimation, AnimationDuration] | undefined;
  framerMotionProps?: FramerMotionProps;
  children: ReactNode;
}

export const ItemDisplayer: FC<ItemDisplayerProps> = ({
  spinner = {},
  loaded = true,
  loadedInStyle = true,
  enterAnimation = undefined,
  framerMotionProps = undefined,
  children,
}) => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        {loaded && (
          <motion.div
            {...getFramerMotionProps(enterAnimation, framerMotionProps)}
            style={{ display: loadedInStyle ? 'initial' : 'none' }}
          >
            {children}
          </motion.div>
        )}

        {(!loaded || !loadedInStyle) && <BaseSpinner {...spinner} />}
      </div>
    </>
  );
};
