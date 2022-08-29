import { StyleSheet, Text, View, Image } from "react-native";
import { font } from "../../themes/fonts"
import { useNavigation } from '@react-navigation/native';
import React from "react";
import FormUser from "../../components/form-user-register";
import { AntDesign } from '@expo/vector-icons';

const CompradorRegister = () => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  }
  return (
    <View style={{ height: "100%", justifyContent: "center" }}>
      <View style={styles.styleView}>
        <View style={styles.firstBlock}>
          <Text style={{fontSize: font.h1.size, fontWeight: font.h1.weight}}><Text><AntDesign onPress={backHandler} name='left' size={25} color="#373C48" /></Text>   HOLA !</Text>
          <Text style={{fontSize: font.b1.size, fontWeight: font.b1.weight}}>
            Queremos conocerte un poco mejor, por favor, rellena la siguiente
            información
          </Text>
        </View>
        <View>
          <Image
            style={styles.imgStyle}
            source={require("../../../assets/comprador.png")}
          />
        </View>
      </View>
      <FormUser />
    </View>
  );
};

const styles = StyleSheet.create({
  styleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  imgStyle: {
    width: 100,
    height: 100,
  },
  firstBlock: {
    maxWidth: 214,
  },
});

export default CompradorRegister;
