import { useContext } from 'react';
import { SliderContext } from '../context/SliderContext';

export const useSlider = () => {
    return useContext(SliderContext)
}