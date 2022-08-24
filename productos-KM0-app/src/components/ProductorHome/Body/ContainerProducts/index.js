import { Text, View, Pressable, FlatList, Image } from "react-native";
import ContainerProductsStyle from "./style";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../themes/colors";
const ContainerProducts = (props) => {
  const Style = ContainerProductsStyle;
  const { data } = props;

  return (
    <>
      <Text style={Style.titleListProducts}>Mercado</Text>
      <FlatList
        style={Style.listProducts}
        data={data}
        renderItem={(products) => (
          <View style={Style.productContain}>
            <Image
              style={Style.image}
              source={{
                uri: products.item.picture,
              }}
            />

            <View style={Style.container1}>
              <Text style={Style.productName}>{products.item.name}</Text>
              <Text style={Style.productPriceText}>Precio recomendado</Text>
            </View>
            <View style={Style.container2}>
              <Pressable style={Style.pressable}>
                <Text style={Style.pressableText}>Asociar a mi perfil</Text>
              </Pressable>
              <Text
                style={
                  products.item.offPrice
                    ? Style.productContainPriceNumberOff
                    : Style.productContainPriceNumber
                }
              >
                <Ionicons
                  name={
                    products.item.offPrice
                      ? "ios-arrow-down-circle-outline"
                      : "ios-arrow-up-circle-outline"
                  }
                  size={18}
                  color={products.item.offPrice ? colors.textError : "#4AD898"}
                />{" "}
                {products.item.price} € / {products.item.unit.toUpperCase()}
              </Text>
            </View>
          </View>
        )}
      />
    </>
  );
};
export default ContainerProducts;
