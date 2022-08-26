import { View } from "react-native";
import ProductorHomeStyles from "./style";
import ContainerProducts from "../../components/ProductorHome/Body/ContainerProducts";
import ListPressables from "../../components/ProductorHome/Body/ListPressables";
import mockUpProducts from "../../utils/mockUpProducts";
import ButtonToAdd from "../../components/ProductorHome/ButtonToAdd";
import HeaderProductorHome from "../../components/ProductorHome/Header";

const ProductorHome = (props) => {
  const notification = { type: "chat" };

  return (
    <View style={ProductorHomeStyles.screen}>
 <HeaderProductorHome notification={notification}/>
      <ListPressables />
      <ContainerProducts data={mockUpProducts} />
     <ButtonToAdd/>
     
    </View>
  );
};

export default ProductorHome;
