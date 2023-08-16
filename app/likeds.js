import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Button, Icon, Flex, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { MaterialIcons } from "@expo/vector-icons";
import back from "../assets/image/popular/back.png"



const likeds = () => {

    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                {/* <Flex direction="row" mb="2.5" mt="3.5">
                    <View >
                        <Image size="lg" source={back} />
                    </View>
                    <View style={{ marginLeft: 49, marginTop: 9 }}>
                        <Text style={{ color: '#EFC81A', fontSize: 21, fontWeight: 'bold' }}>Liked Recipe</Text>

                    </View>
                </Flex> */}

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 33, marginTop: 15 }}>
                        <Button
                            style={{
                                backgroundColor: '#EFC81A'
                            }}>
                            <Icon as={MaterialIcons} color={'white'} size={5} name="thumb-up" />
                        </Button>
                    </View>
                </Flex>


            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default likeds

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 20
    },
});