import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Alert, Modal, StyleSheet, Text, Pressable } from 'react-native';
import { Icon, Input, FormControl, TextArea, Flex, Box } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
import FeatherIcon from "react-native-vector-icons/Feather";
import axios from 'axios';



const ModalUpdateRecipe = ({ recipes_id, recipes_title, recipes_ingredients, recipes_video }) => {
    const [recipes_photo, setRecipes_photo] = useState(null)

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
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({
        recipes_title,
        recipes_ingredients,
        recipes_video,
    });

    const [image, setImage] = useState(null);

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            if (recipes_photo) {
                formData.append('recipes_photo', {
                    uri: recipes_photo,
                    name: "recipes_photo.jpg",
                    type: "image/jpeg"
                })
            }
            formData.append('recipes_title', data.recipes_title);
            formData.append('recipes_ingredients', data.recipes_ingredients);
            formData.append('recipes_video', data.recipes_video);

            await axios.put(
                `http://192.168.43.192:7474/recipes/${recipes_id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            alert('Recipes Updated');
            setShow(false);

        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Edit Recipe</Text>

                        <FormControl>
                            <Input borderRadius={13} backgroundColor={'white'}
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                InputLeftElement={<Icon as={<MaterialIcons name="book" />} size={5} ml="2" color="muted.400" />}
                                placeholder="Title"
                                onChangeText={(value) => handleChange('recipes_title', value)}
                                value={data.recipes_title}
                            />

                            <TextArea borderRadius={13} backgroundColor={'white'} mt='3'
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                h={40}
                                placeholder="Description"
                                value={data.recipes_ingredients}
                                onChangeText={(value) => handleChange('recipes_ingredients', value)}
                            />
                            <Input borderRadius={13} backgroundColor={'white'} mt='3'
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                InputLeftElement={<Icon as={<MaterialIcons name="videocam" />} size={5} ml="2" color="muted.400" />}
                                placeholder="Add Video"
                                value={data.recipes_video}
                                onChangeText={(value) => handleChange('recipes_video', value)}
                            />
                            <Box mt={11}>
                                <View style={{ backgroundColor: '#fff', borderRadius: 10, width: 190, height: 60 }}>
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
                        </FormControl>

                        <Flex direction="row" mt='5'>
                            <Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={[styles.textStyle, { color: '#2196F3' }]}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.textStyle}>Update</Text>
                            </Pressable>
                        </Flex>

                    </View>
                </View>
            </Modal>

            <View style={{ marginLeft: 46, marginTop: -15 }}>
                <Pressable
                    style={[styles.buttons, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    {/* <Button
                            style={{
                                backgroundColor: '#1E90FF'
                            }}>
                            <Icon as={MaterialIcons} color={'white'} size={5} name="create" />
                        </Button> */}
                    <Icon as={MaterialIcons} color={'white'} size={5} name="create" />
                </Pressable>
            </View>
        </View>

    )
}

export default ModalUpdateRecipe

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 3,
        marginTop: 90
    },
    buttons: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 3,
    },
    buttonOpen: {
        backgroundColor: '#1E90FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonCancel: {
        backgroundColor: '#fff',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
