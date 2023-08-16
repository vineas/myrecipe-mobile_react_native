import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Heading, Flex, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import bookmark from "../assets/image/popular/bookmark.png"
import like from "../assets/image/popular/like.png"
import back from "../assets/image/popular/back.png"
import { Link } from 'expo-router'

const Popular = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Heading fontSize="xl" >
                    Popular for you
                </Heading>
                {/* <Flex direction="row" mb="2.5" mt="2.5">
                    <View >
                        <Image size="lg" source={back} />
                    </View>
                    <View style={{ marginLeft: 49, marginTop: 9 }}>
                        <Text style={{color: '#EFC81A',fontSize: 21, fontWeight: 'bold' }}>Popular for You</Text>
                        
                    </View>
                </Flex> */}

                <Flex direction="row" mb="2.5" mt="3.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={list} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20,   }}>Margherita</Text>
                        <View>
                            <Text>In Veg Pizza</Text>
                        </View>
                        <View>
                            <Text>Spicy</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={bookmark} />
                    </View>
                    <View style={{ marginRight: 13, marginTop: 15 }}>
                        <Image size="lg" source={like} />
                    </View>
                </Flex>

            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default Popular

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 20
    },
});