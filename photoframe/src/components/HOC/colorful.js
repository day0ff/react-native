import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';

import * as config from '../../config';
import * as convert from 'color-convert';

function colorful(Component) {

    class Colorful extends PureComponent {
        state = {
            hueValue: new Animated.Value(0),
        };

        componentDidMount() {
            this.props.isColorful && this.hue();
        }

        componentDidUpdate(prevProps) {
            prevProps.isColorful !== this.props.isColorful && this.hue();
        }

        hue = () => {
            this.state.hueValue.setValue(0);
            this.props.isColorful && Animated.timing(
                this.state.hueValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear
                }
            ).start(() => this.props.isColorful && this.hue());
        };

        render() {
            const hsl = convert.hex.hsl(this.props.color);

            const range = new Array(config.animation.range + 1).fill(config.animation.range).map((range, index) => index / range);

            const backgroundColor = this.state.hueValue.interpolate({
                inputRange: [...range],
                outputRange: [...range.map(value => `hsl(${hsl[0] + value * 360}, ${hsl[1]}%, ${hsl[2]}%)`)]
            });

            return (
                <Component colorful={{backgroundColor}}
                           {...this.props}/>
            )
        }
    }

    Colorful.displayName = `HOCColorful${Component.displayName || Component.name || Component}`;

    return Colorful;
}

export default colorful;
