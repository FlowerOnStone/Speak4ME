import React, { useEffect } from 'react';
import { equalUndefined } from 'utils';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ExpandCollapseAnim = ({ collapseIcon, expandIcon, expanded }) => {
    const deg = useSharedValue(0);
    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [{rotate: `${deg.value}deg`}],
        };
    });

    useEffect(() => {
        if (expanded) {
            deg.value = withSpring(180);
        } else {
            deg.value = withSpring(0);
        }
    }, [expanded, deg]);
    return (
        !equalUndefined(expandIcon) ?
            (expanded ? expandIcon : collapseIcon) :
            (
                <Animated.View style={animStyle}>
                    {collapseIcon}
                </Animated.View>
            )
    );
};

export default React.memo(ExpandCollapseAnim);
