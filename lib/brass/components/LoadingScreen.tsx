import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

export interface LoadingScreenProps {
    imgSize: number;
    imgSrc: ImageSourcePropType;
    bgColour: string;
}

export default function LoadingScreen(props: LoadingScreenProps) {
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: props.imgSize,  // Adjust based on your logo size
        height: props.imgSize, // Adjust based on your logo size
        resizeMode: 'contain',
        },
    });
  
    return (
        <View style={[styles.container, { backgroundColor: props.bgColour }]}>
          <Image source={props.imgSrc} style={styles.logo} />
        </View>
    );
}

