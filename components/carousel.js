import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Heading, ScrollView, useTheme, Flex, NativeBaseProvider } from 'native-base';
import carou from "../assets/image/carousel/carou.png"
import carou2 from "../assets/image/carousel/carou-2.png"
import { useNavigation } from "@react-navigation/native";


const Carousel = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('detailresep');
    };
    return (
        <>
            <Heading fontSize="xl" pb="3" marginRight={'50%'}>
                New Recipes
            </Heading>
            <ScrollView w={["280"]} horizontal={true}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou2}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou2}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou2}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.carouselItem}>
                        <Image
                            source={carou}
                        />
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselItem: {
        marginRight: -20
    },
});
