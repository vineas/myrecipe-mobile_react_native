import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, Icon, Flex, NativeBaseProvider } from 'native-base'
import list from "../assets/image/listHome/list-2.png"
import { MaterialIcons } from "@expo/vector-icons";
import back from "../assets/image/popular/back.png"
import axios from 'axios';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const likeds = () => {
    const [likeds, setLikeds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getid = await AsyncStorage.getItem("users_id_profile");
                const response = await axios.get(`http://192.168.43.192:7474/likeds/${getid}`);
                setLikeds(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteLike = (likeds_id) => {
        axios
            .delete(`http://192.168.43.192:7474/likeds/${likeds_id}`)
            .then((res) => {
                alert(
                    "Unlike this recipe",
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
                
                {likeds.map((like) => (
                    <Flex key={like.likeds_id} direction="row" mb="2.5" mt="1.5">
                        <View>
                            <Image size="lg" source={{ uri: like.recipes_photo }} style={{ width: 64, height: 64, borderRadius: 13 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>{like.recipes_title}</Text>
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
                                    onPress={() => handleDeleteLike(like.likeds_id)}
                                >
                                    <MaterialIcons name="thumb-up" color="white" size={20} />
                                </Button>
                            </TouchableOpacity>

                        </View>
                    </Flex>
                ))}

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