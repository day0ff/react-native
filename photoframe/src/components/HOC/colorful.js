import React, { PureComponent } from 'react';

import * as config from '../../config';
import * as convert from 'color-convert';

function colorful(Component) {

    class Colorful extends PureComponent {

        render() {
            const hsl = convert.hex.hsl(this.props.color);

            const range = new Array(config.animation.range + 1).fill(config.animation.range).map((range, index) => index / range);

            const backgroundColor = this.props.globalTimingValue && this.props.globalTimingValue.interpolate({
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
