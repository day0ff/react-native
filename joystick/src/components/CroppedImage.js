import React, {Component} from 'react';

import {View, Image} from 'react-native'

class CroppedImage extends Component {

    render() {
        return (
            <View style={[
                {
                    overflow: 'hidden',
                    padding:0,
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: 'transparent',
                },
                this.props.style
            ]}>
                <Image
                    style={{
                        position: 'absolute',
                        margin:0,
                        padding:0,
                        top: this.props.top * -1,
                        left: this.props.left * -1,
                        width: this.props.imageWidth,
                        height: this.props.imageHeight
                    }}
                    source={this.props.source}
                    resizeMode={this.props.resizeMode}
                >
                    {this.props.children}
                </Image>
            </View>
        );
    }
}

export default CroppedImage;
