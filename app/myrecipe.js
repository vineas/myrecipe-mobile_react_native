import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Button, Center, Flex, Icon, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { Link } from 'expo-router'
import back from "../assets/image/popular/back.png"
import { MaterialIcons } from "@expo/vector-icons";
import ModalUpdateRecipe from '../components/ModalUpdateRecipe'



const MyRecipe = () => {

    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                {/* <Flex direction="row" mb="2.5" mt="3.5">
                    <View >
                        <Image size="lg" source={back} />
                    </View>
                    <View style={{ marginLeft: 49, marginTop: 9 }}>
                        <Text style={{ color: '#EFC81A', fontSize: 21, fontWeight: 'bold' }}>My Recipe</Text>

                    </View>
                </Flex> */}

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>

                        <ModalUpdateRecipe/>
                    {/* <View style={{ marginLeft: 46,  marginTop: 15 }}> */}
                        {/* <Button
                            style={{
                                backgroundColor: '#1E90FF'
                            }}>
                            <Icon as={MaterialIcons} color={'white'} size={5} name="create" />
                        </Button> */}
                    {/* </View> */}
                    <View style={{ marginLeft: 'auto', marginRight:33, marginTop: 15 }}>
                        <Button
                            style={{
                                backgroundColor: 'red'
                            }}>
                            <Icon as={MaterialIcons} color={'white'} size={5} name="delete" />
                        </Button>
                    </View>
                </Flex>


            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default MyRecipe

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 20
    },
});