import React from 'react';
import { View as NativeView} from 'react-native';

interface containerProps {
    style?: any;
    children: React.ReactNode
}
const Container = ({style, ...props} : containerProps) => {
    const viewStyle =[
        style
    ];

    return <NativeView style={viewStyle} {...props}/>;
};
export default Container;