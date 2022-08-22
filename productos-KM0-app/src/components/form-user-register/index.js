import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { Formik, useField } from "formik";
import { styles } from "./styles";
import PrimaryButton from "../primary-button";
import { font } from "../../themes";
import { registerValidation } from "../../validation/registerValidation";

const initialValues = {
  completeName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormikValues = ({ name, textLabel, ...props }) => {
  const [field, metaInfo, helpers] = useField(name);

  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={font.b1}>{textLabel}</Text>
        {metaInfo.error && <Text style={styles.error}>{metaInfo.error}</Text>}
      </View>
      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        style={{
          ...styles.textInput,
          borderWidth: metaInfo.error && 1,
          borderColor: metaInfo.error && "rgba(237, 58, 58, 1)",
        }}
        {...props}
      />
    </>
  );
};

const FormUser = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={registerValidation}
    >
      {({ handleSubmit }) => {
        return (
          <View style={{ padding: 15 }}>
            <FormikValues name={"completeName"} textLabel="Nombre completo*" />
            <FormikValues name={"email"} textLabel="Correo electronico*" />
            <FormikValues
              secureTextEntry
              name={"password"}
              textLabel="Contraseña*"
            />
            <FormikValues
              secureTextEntry
              name={"confirmPassword"}
              textLabel="Confirmar contraseña*"
            />
            <PrimaryButton
              style={{ marginTop: 8 }}
              onPress={handleSubmit}
              title={"Siguiente"}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default FormUser;
