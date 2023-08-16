import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Center, Flex, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { Link, useNavigation } from 'expo-router'
import back from "../assets/image/popular/back.png"

const EditProfile = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('profileuser');

    };
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Flex direction="row" mb="2.5" mt="3.5">
                    <TouchableOpacity onPress={onPress}>
                        <View >
                            <Image size="lg" source={back} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 49, marginTop: 9 }}>
                        <Text style={{ color: '#EFC81A', fontSize: 21, fontWeight: 'bold' }}>Edit Profile</Text>

                    </View>
                </Flex>
            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 20
    },
});