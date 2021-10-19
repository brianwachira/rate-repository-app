import React from 'react';
import { View as NativeView} from 'react-native';
import theme from '../theme';

interface rowProps  {
    style?: any;
    children?: React.ReactNode
}
const Row = ({style, ...props} : rowProps) => {
    const rowStyle =[
        theme.row,
        style
    ];

    return <NativeView style={rowStyle} {...props}/>;
};
export default Row;