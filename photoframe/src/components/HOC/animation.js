import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';

import * as config from '../../config';
import * as convert from 'color-convert';

function animation(Component) {

    class Animation extends PureComponent {
        constructor() {
            super();
            this.spinValue = new Animated.Value(0);
            this.hueValue = new Animated.Value(0);
        }

        componentDidMount() {
            this.spin();
            this.hue();
        }

        spin = () => {
            this.spinValue.setValue(0);
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            ).start(() => this.spin());
        };

        hue = () => {
            this.hueValue.setValue(0);
            Animated.timing(
                this.hueValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            ).start(() => this.hue());
        };

        render() {
            const spin = this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            });

            const hsl = convert.hex.hsl(this.props.color);

            const range = new Array(config.animation.range + 1).fill(config.animation.range).map((range, index) => index / range);

            const hue = this.hueValue.interpolate({
                inputRange: [...range],
                outputRange: [...range.map(value => `hsl(${hsl[0] + value * 360}, ${hsl[1]}%, ${hsl[2]}%)`)]
            });

            return (
                <Component animation={{
                    backgroundColor: hue,
                    transform: [{rotate: spin}]
                }}
                           {...this.props}/>
            )
        }
    }

    Animation.displayName = `HOCAnimation${Component.displayName || Component.name || Component}`;

    return Animation;
}

export default animation;
