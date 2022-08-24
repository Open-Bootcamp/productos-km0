import { View } from "react-native";
import ProductorHomeStyles from "./style";
import ContainerProducts from "../../components/ProductorHome/Body/ContainerProducts";
import FooterProductorHome from "../../components/ProductorHome/Footer";
import ListPressables from "../../components/ProductorHome/Body/ListPressables";
import HeaderProductorHome from "../../components/ProductorHome/Header";
import mockUpProducts from "../../utils/mockUpProducts";

const ProductorHome = (props) => {
  const notification = { type: "chat" };
  return (
    <View style={ProductorHomeStyles.screen}>
      <HeaderProductorHome notification={notification} />
      <ListPressables />
      <ContainerProducts data={mockUpProducts} />
      <FooterProductorHome notification={notification} />
    </View>
  );
};

export default ProductorHome;
