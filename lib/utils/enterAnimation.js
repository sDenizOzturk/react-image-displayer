export const getFramerMotionProps = (animation, framerMotionProps) => {
    if (framerMotionProps) {
        return framerMotionProps;
    }
    if (!animation || animation[0] === 'none') {
        return {};
    }
    const transition = { duration: animation[1] };
    if (animation[0] === 'scale') {
        return {
            initial: { opacity: 0.5, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            transition,
        };
    }
    else if (animation[0] === 'fullscale') {
        return {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
            transition,
        };
    }
    else if (animation[0] === 'fade') {
        return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition,
        };
    }
    else if (animation[0] === 'blur') {
        return {
            initial: { opacity: 0, filter: 'blur(10px)' },
            animate: { opacity: 1, filter: 'blur(0px)' },
            transition,
        };
    }
    else if (animation[0] === 'left') {
        return {
            initial: { x: '-10%' },
            animate: { x: 0 },
            transition,
        };
    }
    else if (animation[0] === 'right') {
        return {
            initial: { x: '10%' },
            animate: { x: 0 },
            transition,
        };
    }
    else if (animation[0] === 'top') {
        return {
            initial: { y: '-10%' },
            animate: { y: 0 },
            transition,
        };
    }
    else if (animation[0] === 'bottom') {
        return {
            initial: { y: '10%' },
            animate: { y: 0 },
            transition,
        };
    }
    else if (animation[0] === 'fullleft') {
        return {
            initial: { x: '-100%' },
            animate: { x: 0 },
            transition,
        };
    }
    else if (animation[0] === 'fullright') {
        return {
            initial: { x: '100%' },
            animate: { x: 0 },
            transition,
        };
    }
    else if (animation[0] === 'fulltop') {
        return {
            initial: { y: '-100%' },
            animate: { y: 0 },
            transition,
        };
    }
    else if (animation[0] === 'fullbottom') {
        return {
            initial: { y: '100%' },
            animate: { y: 0 },
            transition,
        };
    }
    return {};
};
