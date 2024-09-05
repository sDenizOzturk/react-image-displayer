import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BaseSpinner } from './BaseSpinner';
import { motion } from 'framer-motion';
import { getFramerMotionProps, } from '../utils/enterAnimation';
export const ItemDisplayer = ({ spinner = {}, loaded = true, loadedInStyle = true, enterAnimation = undefined, framerMotionProps = undefined, children, }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { style: { position: 'relative' }, children: [loaded && (_jsx(motion.div, { ...getFramerMotionProps(enterAnimation, framerMotionProps), style: { display: loadedInStyle ? 'initial' : 'none' }, children: children })), (!loaded || !loadedInStyle) && _jsx(BaseSpinner, { ...spinner })] }) }));
};
