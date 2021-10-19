import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    padding: 20,        
    },
    text: {    
    color: 'grey',
    fontSize: 14,  
    },  
    blueText: {
    color: 'blue',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700',
  },
});
type Props = {
    isBlue?: boolean,
    isBig?: boolean,
    children: React.ReactNode
}
const FancyText = ({ isBlue, isBig, children } : Props) => {
    const textStyles = [
        styles.text,
        isBlue && styles.blueText,
        isBig && styles.bigText
    ];
    return <Text style={textStyles}>{children}</Text>;
};

const BigBlueText = () => {
    return (
        <View style={styles.container}>
            <FancyText>Simple text</FancyText>
            <FancyText isBlue>Blue text</FancyText>
            <FancyText isBig>Big text</FancyText>
            <FancyText isBig isBlue>
                Big blue text
            </FancyText>        
        </View>
    );
};

export default BigBlueText;