import * as React from 'react';
import { Image, Button, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, StatusBar, RefreshControl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, NativeBaseProvider, ScrollView, Stack, Icon, Heading, TextArea, Avatar, Flex } from 'native-base';
import { MaterialIcons } from 'react-native-vector-icons';
import Popular from '../app/popular';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailResep from '../app/detailresep';
import Profile from '../app/profileuser';
import AddRecipe from '../app/addrecipe';
import { Ionicons } from '@expo/vector-icons';
import MyRecipe from '../app/myrecipe';
import LikedsRecipe from '../app/likeds';
import Saved from '../app/saved';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipe } from '../app/redux/actions/recipeAction';
import Page from '../app';
import Login from '../app/login';
import { CommonActions } from '@react-navigation/native';
import { TabActions } from '@react-navigation/native';




function DetailsScreen() {
    return (
        <View>
            <DetailResep />
        </View>
    );
}

function HomeScreen({ navigation }) {
    const onPress = () => {
        navigation.navigate('detailresep');
    };
    const dispatch = useDispatch();
    const [recipe, setRecipe] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchData = () => {
        dispatch(getRecipe(setRecipe));
        setRefreshing(false);
    };

    useEffect(() => {
        fetchData();
    }, []);
    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const handleOnClick = (recipes_id) => {
        navigation.navigate('Details', { id: recipes_id }); // Navigate to detail screen with ID
    };

    const filteredRecipes = recipe.filter((item) =>
        item.recipes_title.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <Stack space={4} alignItems="center" marginTop={13} key="stack">
                        <Input
                            borderRadius={13}
                            w={{
                                base: "90%",
                                md: "65%"
                            }}
                            InputLeftElement={<Icon as={MaterialIcons} name="search" size={5} ml={2} color="muted.400" />}
                            placeholder="Search Pasta, Bread, etc"
                            key="input-search"
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                        />
                        <Heading fontSize="xl" pb="3" marginRight={'60%'}>
                            New Recipes
                        </Heading>
                        <ScrollView w={["320"]} horizontal={true}>
                            {filteredRecipes.map((item, index) => (
                                <TouchableOpacity
                                    key={index.toString()}
                                    // onPress={() => navigation.navigate('Details')} 
                                    onPress={() => handleOnClick(item.recipes_id)}
                                    style={styles.touchable}
                                >
                                    <View style={styles.carouselItem}>
                                        <Image source={{ uri: item.recipes_photo }} style={styles.image} />
                                        <Text style={styles.imageText}>{item.recipes_title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </Stack>
                    <Popular />
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}


const handleLogout = async (navigation) => {
    try {
        await AsyncStorage.clear();
        navigation.navigate('login');
        console.log();
    } catch (error) {
        console.log(error);
    }
};
function ProfileScreen({ navigation }) {
    return (
        <>
            <Profile
                onPressLike={() => navigation.navigate('likeds')}
                onPressEditProfile={() => navigation.navigate('editprofile')}
                onPressMyRecipe={() => navigation.navigate('myrecipe')}
                onPressSaved={() => navigation.navigate('saved')}
                handleLogout={() => handleLogout(navigation)}
            />
        </>
    );
}

function IndexPageScreen() {
    return (
        // <Page/>
        <Login />
    );
}

function AddResepScreen() {
    return (
        <AddRecipe />
    );
}

function EditProfileScreen() {
    return (
        <></>
    );
}
function MyRecipeScreen() {
    return (
        <MyRecipe />
    );
}
function SavedScreen() {
    return (
        <Saved />
    );
}
function LikedScreen() {
    return (
        <LikedsRecipe />
    );
}


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

const AddStack = createNativeStackNavigator();
function AddStackScreen() {
    return (
        <AddStack.Navigator>
            <AddStack.Screen name="AddRecipe" component={AddResepScreen} options={{ headerShown: false }} />
        </AddStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <ProfileStack.Screen name="myrecipe" component={MyRecipeScreen} />
            <ProfileStack.Screen name="saved" component={SavedScreen} />
            <ProfileStack.Screen name="likeds" component={LikedScreen} />
            <ProfileStack.Screen name="login" component={IndexPageScreen} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#EFC81A'
                }}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'AddRecipe') {
                            iconName = focused ? 'add' : 'add-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={'#EFC81A'} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="AddRecipe" component={AddStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    containerProfile: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    bottomNav: {
        width: '100%',
        height: '5%',
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 0,
    },
    carouselItem: {
        marginRight: 13
    },
    image: {
        width: 170,
        height: 200,
        borderRadius: 15,
        resizeMode: "cover"
    },
    imageText: {
        marginLeft: 7,
        marginRight: 7,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
        bottom: 0,
        marginBottom: 29,
        position: 'absolute',
        // textAlign: "center",

    },
});
