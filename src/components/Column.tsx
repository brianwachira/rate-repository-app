import React from 'react';
import { View as NativeView} from 'react-native';

interface columnProps {
    style?: any;
    children: React.ReactNode
}
const Column = ({style, ...props} : columnProps) => {
    const columnStyle =[
        style
    ];

    return <NativeView style={columnStyle} {...props}/>;
};
export default Column;