import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Button, Center, Flex, Icon, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { Link } from 'expo-router'
import back from "../assets/image/popular/back.png"
import { MaterialIcons } from "@expo/vector-icons";
import ModalUpdateRecipe from '../components/ModalUpdateRecipe'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native'
import ModalDeleteRecipe from '../components/ModalDeleteRecipe'

const MyRecipe = () => {
    let [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getid = await AsyncStorage.getItem("users_id_profile");
                const response = await axios.get(`http://192.168.1.5:7474/recipes/users/${getid}`);
                setRecipes(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>

                {recipes.map((recipe) => (
                    <Flex direction="row" mb="2.5" mt="1.5">
                        <View>
                            <Image size="lg" source={{ uri: recipe.recipes_photo }} style={{ width: 64, height: 64, borderRadius: 13 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, }}>{recipe.recipes_title}</Text>
                            <View>
                                <Text>⭐ 4.9</Text>
                            </View>
                        </View>

                        <ModalUpdateRecipe
                            recipes_id={recipe.recipes_id}
                            recipes_title={recipe.recipes_title}
                            recipes_ingredients={recipe.recipes_ingredients}
                            recipes_photo={recipe.recipes_photo}
                            recipes_video={recipe.recipes_video}
                        />
                        <ModalDeleteRecipe
                            recipes_id={recipe.recipes_id}
                        />
                    </Flex>
                ))}



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