import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Icon, Input, FormControl, TextArea, Flex } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";


const ModalUpdateRecipe = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                            />

                            <TextArea borderRadius={13} backgroundColor={'white'} mt='3'
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                h={40}
                                placeholder="Description"
                            />
                            <Input borderRadius={13} backgroundColor={'white'} mt='3'
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                InputLeftElement={<Icon as={<MaterialIcons name="image" />} size={5} ml="2" color="muted.400" />}
                                placeholder="Add Picture"
                            />
                            <Input borderRadius={13} backgroundColor={'white'} mt='3'
                                w={{
                                    base: "80%",
                                    md: "45%"
                                }}
                                InputLeftElement={<Icon as={<MaterialIcons name="videocam" />} size={5} ml="2" color="muted.400" />}
                                placeholder="Add Video"
                            />
                        </FormControl>

                        <Flex direction="row" mt='5'>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={[styles.textStyle, { color: '#2196F3' }]}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            // onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Update</Text>
                        </Pressable>
                        </Flex>
                        
                    </View>
                </View>
            </Modal>

            <View style={{ marginLeft: 46, marginTop: -15 }}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
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
        margin: 3
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
