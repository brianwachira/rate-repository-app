import React from 'react';
import { View as NativeView} from 'react-native';
import theme from '../theme';
const Row = ({style, ...props}) => {
    const rowStyle =[
        theme.row,
        style
    ];

    return <NativeView style={rowStyle} {...props}/>;
};
export default Row;