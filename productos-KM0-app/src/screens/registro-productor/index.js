import { ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { CustomInput, PrimaryButton } from "../../components";
import { styles } from "./styles";

const ProductorRegister = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1, marginTop: 50 }}>
          Queremos conocerte un poco mejor, por favor, rellena la siguiente
          información.
        </Text>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../../assets/images/agricultor.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label="Nombre Completo*"
          placeholder="Ejemplo: David Cardona"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label="Correo Electronico*"
          placeholder="usuari@ejemplo.com"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label="Contrasena*"
          placeholder="Ingresa una contrasena"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label="Confirmar Contrasena*"
          placeholder="Confirmar contrasena"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <PrimaryButton title="Siguiente > " />
      </View>
    </ScrollView>
  );
};

export default ProductorRegister;
