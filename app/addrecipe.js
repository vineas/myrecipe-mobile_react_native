import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Stack, Input, Icon, Pressable, Text, Button, TextArea, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import defaultImg from "../assets/image/login/default.jpg"
import { Link } from "expo-router";
import login from "./login";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity, View, Image } from "react-native";
import axios from "axios";

const AddRecipe = () => {
    const [show, setShow] = React.useState(false);
    const navigation = useNavigation();
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setRecipes_photo(result.assets[0].uri);
        }
    };
    const [recipes_title, setRecipes_title] = useState('')
    const [recipes_ingredients, setRecipes_ingredients] = useState('')
    const [recipes_video, setRecipes_video] = useState('')
    const [recipes_photo, setRecipes_photo] = useState(null)
    const handleSubmit = async () => {
        try {
            const users = await AsyncStorage.getItem('users_id_profile')
            const formData = new FormData();
            formData.append('recipes_title', recipes_title)
            formData.append('recipes_ingredients', recipes_ingredients)
            formData.append('recipes_video', recipes_video)
            formData.append('users_id', users)
            if (recipes_photo) {
                formData.append('recipes_photo', {
                    uri: recipes_photo,
                    name: "recipes_photo.jpg",
                    type: "image/jpeg"
                })
            }
            const res = await axios.post("http://192.168.1.5:7474/recipes", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
            setRecipes_title(""),
                setRecipes_ingredients(""),
                setRecipes_video("")
            alert('Succes')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(recipes_title);
    console.log(recipes_ingredients);
    console.log(recipes_video);


    return (
        <NativeBaseProvider >
            <Stack space={4} w="100%" alignItems="center" height="100%" backgroundColor={'#F5F5F5'} >
                <Text style={{ color: '#EFC81A', fontSize: 22, fontWeight: 'bold' }} marginTop={20}>Add Your Recipe</Text>
                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="book" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Title"
                    onChangeText={setRecipes_title}
                />
                <TextArea borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    h={40}
                    placeholder="Description"
                    onChangeText={setRecipes_ingredients}
                />

                <Input borderRadius={13} backgroundColor={'white'}
                    w={{
                        base: "80%",
                        md: "45%"
                    }}
                    InputLeftElement={<Icon as={<MaterialIcons name="videocam" />} size={5} ml="2" color="muted.400" />}
                    placeholder="Add Video"
                    onChangeText={setRecipes_video}
                />

                <Box mt={11}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 10, width: 290, height: 60 }}>
                        <TouchableOpacity onPress={pickImage} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                            <Icon as={<FeatherIcon name="image" />} size={7} ml="5" color="muted.500" />
                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: '200' }}>Add Image</Text>
                        </TouchableOpacity>
                        {recipes_photo && (
                            <Image
                                source={{ uri: recipes_photo }}
                                style={{ width: 100, height: 100, marginTop: 5 }}
                            />
                        )}
                    </View>
                </Box>

                <Button onPress={handleSubmit} size='md' borderRadius={13} w={{
                    base: "80%",
                    md: "25%"
                }} backgroundColor={'#EFC81A'} style={{ marginTop: 90 }}
                >Create
                </Button>


            </Stack>
        </NativeBaseProvider>
    )
}

export default AddRecipe

// const styles = StyleSheet.create({})