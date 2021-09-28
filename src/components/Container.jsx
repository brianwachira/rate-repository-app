import React from 'react';
import { View as NativeView} from 'react-native';

const Container = ({style, ...props}) => {
    const viewStyle =[
        style
    ];

    return <NativeView style={viewStyle} {...props}/>;
};
export default Container;