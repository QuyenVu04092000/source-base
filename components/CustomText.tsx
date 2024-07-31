import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import React from 'react';
import { Text } from 'react-native';

const CustomText = (props: any) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });

    return <Text {...props} style={[props.style, { fontFamily: 'Roboto_400Regular' }]} />;
};

export default CustomText;
