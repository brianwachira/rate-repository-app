import React from 'react';
import { View as NativeView} from 'react-native';

const Column = ({style, ...props}) => {
    const columnStyle =[
        style
    ];

    return <NativeView style={columnStyle} {...props}/>;
};
export default Column;