import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { getFramerMotionProps, } from '../utils/enterAnimation';
import { motion } from 'framer-motion';
import { getHeaders } from '../utils/headers';
import { ItemDisplayer } from './ItemDisplayer';
export const ImageDisplayer = ({ url, token = undefined, headers = undefined, delay = 0, enterAnimation = undefined, framerMotionProps = undefined, imageStyle = undefined, spinner = {}, onDownload = () => undefined, onLoad = () => undefined, onError = () => undefined, consoleError = false, }) => {
    const [image, setImage] = useState();
    const [loaded, setLoaded] = useState(false);
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url, {
                headers: getHeaders(headers, token),
            });
            if (response.status === 200) {
                onDownload();
                const reader = new FileReader();
                reader.onload = () => {
                    setImage(reader.result);
                };
                reader.onerror = () => {
                    consoleError && console.log('Reader error');
                    onError();
                };
                const responseBlob = await response.blob();
                if (!responseBlob.type.includes('image')) {
                    consoleError && console.log('Not an image!');
                    onError();
                    return;
                }
                reader.readAsDataURL(responseBlob);
                if (delay) {
                    setTimeout(() => {
                        onLoad();
                        setLoaded(true);
                    }, delay);
                }
                else {
                    onLoad();
                    setLoaded(true);
                }
            }
            else {
                consoleError && console.log('Could not fetch image!');
                onError();
            }
        }
        catch (err) {
            consoleError && console.log(err);
            onError();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (_jsx(ItemDisplayer, { loaded: loaded, spinner: spinner, children: _jsx(motion.img, { src: image, style: { width: '100%', height: 'auto', margin: 0, ...imageStyle }, ...getFramerMotionProps(enterAnimation, framerMotionProps) }) }));
};
