import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from 'react';
import * as reactSpinners from 'react-spinners';
export const BaseSpinner = ({ spinnerType = 'ClipLoader', spinnerCss = {}, color = 'blue', size = '2rem', aspectRatio = '16/9', wrapperHeight = '', }) => {
    const Spinner = spinnerType === 'none' ? Fragment : reactSpinners[spinnerType];
    return (
    //Spinner Wrapper
    _jsx("div", { style: {
            width: '100%',
            aspectRatio: aspectRatio,
            height: wrapperHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, children: _jsx(Spinner, { color, cssOverride: spinnerCss, size }) }));
};
