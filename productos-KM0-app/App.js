//import MainStack from "./src/navigation/main";
import MainStackNavigator from './src/navigation/main'; 
import {SliderProvider} from './src/components/context/SliderContext'; 
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <SliderProvider>
          <MainStackNavigator />
        </SliderProvider>
      </Provider>
    </>
  );
}

// 16.17.0 NODE VERSION USED