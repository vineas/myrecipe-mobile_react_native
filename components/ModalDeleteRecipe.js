import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Modal, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from 'native-base';

const ModalDeleteRecipe = ({ recipes_id }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClose = () => setModalVisible(false);
    const handleShow = () => setModalVisible(true);
    const handleSubmit = () => {
        axios.delete(`http://192.168.43.192:7474/recipes/${recipes_id}`)
            .then(() => {
                alert("Recipe Deleted");
                setModalVisible(false);
            })
            .catch((err) => {
                alert(err);
                setModalVisible(false);
            });
    };

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={handleShow}>
                <View >
                    <Icon as={MaterialIcons} color={'white'} size={5} name="delete" onPress={handleShow} />
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Recipe</Text>
                        <Text style={styles.modalText}>Are you sure you want to delete this recipe?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleClose}>
                                <Text style={{color:'grey'}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </>
    )
}

export default ModalDeleteRecipe

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20,
    },
    modalButton: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    closeButton: {
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 14,
        marginRight: 10,
        width: 40,
        height: 40
    },
});
