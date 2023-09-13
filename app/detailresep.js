import { Image, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Button, Icon, NativeBaseProvider, Stack, View, VStack, Text, Flex } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import detailImg from "../assets/image/detailRecipe/detail.png"
import { useState } from 'react';
import play from "../assets/image/detailRecipe/playbutton.png"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getDetailRecepe } from './redux/actions/recipeAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


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


const FirstRoute = ({ recipe }) => (
    <View>
        <Flex direction="row" mb="2.5" mt="1.5">
            <VStack space={2} marginLeft={4}>
                {/* {IngredientsList.map((ingredient, index) => ( */}
                <Text fontSize={17} color={'grey'}>
                    {/* - {ingredient} */}
                    {recipe.recipes_ingredients}
                </Text>
                {/* ))} */}
            </VStack>
        </Flex>
    </View>
);

const SecondRoute = ({ recipe }) => (
    <View>
        <Flex direction="row" mb="2.5" mt="4">
            <View>
                <Image size="lg" source={play} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text fontSize={17} color={'grey'} mt={15}>
                    Video panduan {recipe.recipes_title}
                </Text>
                <View>
                    {/* <Text>Spicy</Text> */}
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
    const dispatch = useDispatch();
    const route = useRoute();
    const [recipe, setRecipe] = useState({});
    // const [recipes_id, setRecipesId] = useState('');
    const [users_id, setUsersId] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const { id } = route.params || {};
    const [saveClicked, setsaveClicked] = useState(false);

    const toggleLike = (liked) => {
        setIsLiked(liked);
    };
    const toggleLike2 = (like) => {
        setIsLike(like);
    };



    const handleLikeClick = async () => {
        const dataUser = await AsyncStorage.getItem("users_id");
        const data = {
            recipes_id: id,
            users_id: dataUser,
        };
        console.log(data);
        axios.post("http://192.168.1.5:7474/likeds", data)
        .then((res) => {
            if (res.data.statusCode === 201) {
                alert("You like this recipe");
            } else if (res.data.message === "Like Already") {
                alert("Liked Already");
            }
        });
    };

    
    const handleSaveClick = async () => {
        const dataUser = await AsyncStorage.getItem("users_id");
        const data = {
            recipes_id: id,
            users_id: dataUser,
        };
        console.log(data);
        axios.post("http://192.168.1.5:7474/bookmarks", data).then((res) => {
            if (res.data.statusCode === 201) {
                alert("Save Recipe Success");
            } else if (res.data.message === "Bookmarks Already") {
                alert("Already save");
            }
        });
    };



    useEffect(() => {
        if (id) {
            dispatch(getDetailRecepe(setRecipe, id));
        }
    }, [id]);

    // const handleSaveClick = () => {
    //     setSaveClicked(!saveClicked);
    // };

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
                        <Image w="100%" style={{ width: 375, height: 492 }}
                            source={{ uri: recipe.recipes_photo }}
                        />
                        <Text
                            color={'white'}
                            fontSize={30}
                            style={{
                                position: 'absolute',
                                top: 190,
                                fontWeight: 'bold',
                                left: 25,
                            }}>
                            {/* Sandwich with Egg */}
                            {recipe.recipes_title}
                        </Text>

                        {/* <Text
                            color={'#B0B0B0'}
                            fontSize={16}
                            style={{
                                position: 'absolute',
                                top: 230,
                                left: 25,
                            }}>
                            By {recipe.users_id}
                        </Text> */}

                        <Button
                            onPress={handleLikeClick}
                            style={{
                                position: 'absolute',
                                top: 280,
                                right: 85,
                                backgroundColor: isLiked ? '#EFC81A' : 'white',
                            }}>
                            <Icon as={MaterialIcons} color={isLiked ? 'white' : '#EFC81A'} size={5} name="thumb-up-off-alt" />
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
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={({ route }) => {
                            switch (route.key) {
                                case 'first':
                                    return <FirstRoute recipe={recipe} />;
                                case 'second':
                                    return <SecondRoute recipe={recipe} />;
                                default:
                                    return null;
                            }
                        }}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={props => <TabBar {...props} style={{ backgroundColor: "white" }} labelStyle={{ color: 'black' }} />}
                    />
                </View>

            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default detailresep