import * as React from 'react';
import { Image, Button, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, NativeBaseProvider, ScrollView, Stack, Icon, Heading, TextArea, Avatar, Flex } from 'native-base';
import { MaterialIcons } from 'react-native-vector-icons';
import Popular from '../app/popular';
import carou from "../assets/image/carousel/carou.png"
import carou2 from "../assets/image/carousel/carou-2.png"
import DetailResep from '../app/detailresep';
import Profile from '../app/profileuser';
import AddRecipe from '../app/addrecipe';
import { Ionicons } from '@expo/vector-icons';
import defaultImg from "../assets/image/login/default.jpg"
import panah from '../assets/image/profile/shape.png'
import MyRecipe from '../app/myrecipe';
import LikedsRecipe from '../app/likeds';
import Saved from '../app/saved';



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
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <Stack space={4} alignItems="center" marginTop={13} key="stack" >
                        <Input
                            borderRadius={13}
                            w={{
                                base: "90%",
                                md: "65%"
                            }}
                            InputLeftElement={<Icon as={MaterialIcons} name="search" size={5} ml={2} color="muted.400" />}
                            placeholder="Search Pasta, Bread, etc"
                            key="input-search"
                        />
                        {/* <Carousel key="carousel" /> */}
                        <Heading fontSize="xl" pb="3" marginRight={'60%'}>
                            New Recipes
                        </Heading>
                        <ScrollView w={["320"]} horizontal={true}>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou2}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou2}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou2}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                <View style={styles.carouselItem}>
                                    <Image
                                        source={carou}
                                    />
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </Stack>
                    <Popular />
                </ScrollView>
            </SafeAreaView>


        </NativeBaseProvider>
    );
}

function ProfileScreen({ navigation }) {
    // const onPressLike = () => {
    //     navigation.navigate('likeds');
    // };
    // const onPressEditProfile = () => {
    //     navigation.navigate('editprofile');
    // };
    // const onPressMyRecipe = () => {
    //     navigation.navigate('myrecipe');
    // };
    // const onPressSaved = () => {
    //     navigation.navigate('saved');
    // };
    return (
        <Profile
            onPressLike={() => navigation.navigate('likeds')}
            onPressEditProfile={() => navigation.navigate('editprofile')}
            onPressMyRecipe={() => navigation.navigate('myrecipe')}
            onPressSaved={() => navigation.navigate('saved')}
        />
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
        marginRight: -20
    },
});
