import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import CroppedImage from './CroppedImage';

class CroppedButton extends Component {
    constructor() {
        super();
        this.state = {
            pressed: false
        }
    }

    pressButtonIn = () => {
        this.setState({pressed: true});
    };

    pressButtonOut = () => {
        this.setState({pressed: false});
    };

    render() {
        const {pressedOn, pressedOff, style} = this.props;

        return (
            <TouchableWithoutFeedback onPressIn={this.pressButtonIn} onPressOut={this.pressButtonOut}>
                <View style={style}>
                    <CroppedImage {...this.state.pressed ? pressedOn : pressedOff}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default CroppedButton;