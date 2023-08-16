import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Input, Stack, Icon, ScrollView, View, Flex, Text } from 'native-base';
import { MaterialIcons } from 'react-native-vector-icons';
import List from '../components/List';
import Carousel from '../components/carousel';
import { useNavigation } from "@react-navigation/native";
import Popular from './popular';
import BottomNav from '../components/bottomnav';

const Home = () => {
    const navigation = useNavigation();
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
                                base: "80%",
                                md: "45%"
                            }}
                            InputLeftElement={<Icon as={MaterialIcons} name="search" size={5} ml={2} color="muted.400" />}
                            placeholder="Search Pasta, Bread, etc"
                            key="input-search"
                        />
                        {/* <TouchableOpacity onPress={onPress}> */}
                        <Carousel key="carousel" />
                    </Stack>
                    <Popular />
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default Home;

const styles = StyleSheet.create({
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
});
