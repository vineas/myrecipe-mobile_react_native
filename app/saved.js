import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Center, Flex, Icon, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { MaterialIcons } from "@expo/vector-icons";
import back from "../assets/image/popular/back.png"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Saved = () => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getid = await AsyncStorage.getItem("users_id_profile");
                const response = await axios.get(`https://team-project-kelompok1-pijar-backend.vercel.app/bookmarks/${getid}`);
                setSaved(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteSave = (bookmarks_id) => {
        axios
            .delete(`https://team-project-kelompok1-pijar-backend.vercel.app/bookmarks/${bookmarks_id}`)
            .then((res) => {
                alert(
                    "Unsave this recipe",
                    "Resep akan diunlike",
                    [
                        { text: "Batal", style: "cancel" },
                        {
                            text: "Ya, unlike",
                            onPress: () => {
                                setLikeds((prevLikes) => prevLikes.filter((like) => like.likeds_id !== likeds_id));
                            },
                            style: "destructive",
                        },
                    ],
                    { cancelable: true }
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>

            {saved.map((save) => (
                <Flex direction="row" mb="2.5" mt="1.5">
                    <View>
                        <Image size="lg" source={{ uri: save.recipes_photo }} style={{ width: 64, height: 64, borderRadius: 13 }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, }}>{save.recipes_title}</Text>
                        <View>
                            <Text>⭐ 4.9</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 33, marginTop: 15 }}>
                    <TouchableOpacity
                                style={{ backgroundColor: 'pink', borderRadius: 10, marginTop: 5, marginBottom: 5 }}
                            // onPress={() => handleDeleteLike(like.likeds_id)}
                            >
                                <Button
                                    style={{ backgroundColor: '#EFC81A', borderRadius: 10 }}
                                    onPress={() => handleDeleteSave(save.bookmarks_id)}
                                >
                                    <MaterialIcons name="turned-in" color="white" size={20} />
                                </Button>
                            </TouchableOpacity>

                    </View>
                </Flex>
                ))}

            </NativeBaseProvider>
        </SafeAreaView>
    )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 20
    },
});