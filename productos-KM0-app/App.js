//import MainStack from "./src/navigation/main";
import MainStackNavigator from './src/navigation/main'; 
import {SliderProvider} from './src/components/context/SliderContext'; 

export default function App() {
  return (
    <>
      <SliderProvider>
        <MainStackNavigator />
      </SliderProvider>
    </>
  );
}

// 16.17.0 NODE VERSION USED