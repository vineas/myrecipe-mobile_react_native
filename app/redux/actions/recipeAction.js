import axios from "axios";
import { Alert } from "react-native";

export const getRecipe = (setRecipe) => async (dispatch) => {
  try {
    const response = await axios.get(`http://192.168.43.192:7474/recipes`);
    setRecipe(response.data.data);

    dispatch({ type: "GET_ALL_RECEPE", payload: "success" });
  } catch (error) {
    Alert.alert("Warning", error.response.data.message);
  }
};

export const getDetailRecepe = (setRecipe, id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://192.168.43.192:7474/recipes/${id}`);
    setRecipe(response.data.data[0]);
    console.log(response.data.data[0]);
    dispatch({ type: "GET_DETAIL_RECEPE", payload: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const createRecipe = (data, recipes_photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("recipes_title", data.recipes_title);
    formData.append("recipes_ingredients", data.recipes_ingredients);
    formData.append("recipes_video", data.recipes_video);
    formData.append("recipes_photo", recipes_photo);
    formData.append("users_id", data.users_id);

    // console.log(FormData.append("recipes_title", data.recipes_title));
    console.log(data);
    const response = await axios.post(`http://192.168.43.192:7474/recipes`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    
    // Tampilkan notifikasi menggunakan komponen Alert bawaan dari React Native
    Alert.alert("Recipe Added", "New product has been added", [{ text: "OK", onPress: () => window.location.reload() }]);

    dispatch({ type: "CREATE_PRODUCT", payload: "success" });
  } catch (err) {
    Alert.alert("Warning", err.response.data.message);
  }
};
