import { Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { Box, Button, Icon, NativeBaseProvider, Stack, View, VStack, Text, Flex } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import detailImg from "../assets/image/detailRecipe/detail.png"
import { useState } from 'react';
import play from "../assets/image/detailRecipe/playbutton.png"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const IngredientsList = [
    '2 slices whole-grain bread (bakery-fresh recommended)',
    '1 tablespoon hummus',
    '2 slices tomato',
    '1/2 small cucumber, thinly sliced lengthwise',
    '1 slice low-fat cheese',

    '2 slices whole-grain bread (bakery-fresh recommended)',
    '1 tablespoon hummus',
    '2 slices tomato',
    '1/2 small cucumber, thinly sliced lengthwise',
    '1 slice low-fat cheese',

    '2 slices whole-grain bread (bakery-fresh recommended)',
    '1 tablespoon hummus',
    '2 slices tomato',
    '1/2 small cucumber, thinly sliced lengthwise',
    '1 slice low-fat cheese',
];
const FirstRoute = () => (
      <View>
        <Flex direction="row" mb="2.5" mt="1.5">
          <VStack space={2} marginLeft={4}>
            {IngredientsList.map((ingredient, index) => (
              <Text key={index} fontSize={17} color={'grey'}>
                - {ingredient}
              </Text>
            ))}
          </VStack>
        </Flex>
      </View>
);

const SecondRoute = () => (
    <View>
        <Flex direction="row" mb="2.5" mt="4">
            <View>
                <Image size="lg" source={play} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 22 }}>Video</Text>
                <View>
                    <Text>In Veg Pizza</Text>
                </View>
                <View>
                    <Text>Spicy</Text>
                </View>
            </View>
        </Flex>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});


const detailresep = () => {
    const [likeClicked, setLikeClicked] = useState(false);
    const [saveClicked, setSaveClicked] = useState(false);

    const handleLikeClick = () => {
        setLikeClicked(!likeClicked);
    };

    const handleSaveClick = () => {
        setSaveClicked(!saveClicked);
    };

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Ingredients' },
        { key: 'second', title: 'Video' },
    ]);
    return (
        <SafeAreaView style={{ backgroundColor: "#EEC302", height: 300 }}>
            <NativeBaseProvider>
                
                <Stack space={4} w="100%" alignItems="center" justifyContent="center" height="110%">
                    <Box position="relative" w="100%" h="100%">
                        <Image w="100%" source={detailImg} />
                        <Text
                            color={'white'}
                            fontSize={30}
                            style={{
                                position: 'absolute',
                                top: 190,
                                fontWeight: 'bold',
                                left: 25,
                            }}>
                            Sandwich with Egg
                        </Text>

                        <Text
                            color={'#B0B0B0'}
                            fontSize={16}
                            style={{
                                position: 'absolute',
                                top: 230,
                                left: 25,
                            }}>
                            By Cheff Arnold
                        </Text>

                        <Button
                            onPress={handleLikeClick}
                            style={{
                                position: 'absolute',
                                top: 280,
                                right: 85,
                                backgroundColor: likeClicked ? '#EFC81A' : 'white',
                            }}>
                            <Icon as={MaterialIcons} color={likeClicked ? 'white' : '#EFC81A'} size={5} name="thumb-up-off-alt" />
                        </Button>

                        <Button
                            onPress={handleSaveClick}
                            style={{
                                position: 'absolute',
                                top: 280,
                                right: 25,
                                backgroundColor: saveClicked ? '#EFC81A' : 'white',
                            }}>
                            <Icon as={MaterialIcons} color={saveClicked ? 'white' : '#EFC81A'} size={5} name="turned-in-not" />
                        </Button>
                    </Box>
                </Stack>

                <View backgroundColor={'white'} h='190%' w='99.91%' borderRadius={20} paddingLeft={6} paddingRight={6}>
                    {/* <ScrollView> */}
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={props => <TabBar {...props} style={{ backgroundColor: "white" }} labelStyle={{ color: 'black' }} />}
                    />
                    {/* </ScrollView> */}
                </View>

            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default detailresep