import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';

import * as config from '../../config';

function globalTiming(Component) {

    class GlobalTiming extends PureComponent {
        constructor() {
            super();
            this.globalTimingValue = new Animated.Value(0);
        }

        componentDidMount() {
            this.globalTiming();
        }

        globalTiming = () => {
            this.globalTimingValue.setValue(0);
            Animated.timing(
                this.globalTimingValue,
                {
                    toValue: 1,
                    duration: config.animation.time,
                    easing: Easing.linear
                }
            ).start(() => this.globalTiming());
        };

        render() {
            // const range = new Array(config.animation.range + 1).fill(config.animation.range).map((range, index) => index / range);

            // const globalTimingValue = this.globalTiming.interpolate({
            //     inputRange: [...range],
            //     outputRange: [...range]
            // });

            return (
                <Component globalTimingValue={this.globalTimingValue}
                           {...this.props}/>
            )
        }
    }

    GlobalTiming.displayName = `HOCGlobalTiming${Component.displayName || Component.name || Component}`;

    return GlobalTiming;
}

export default globalTiming;
