import { TextInput, TextInputProps } from 'react-native';
import { inputStyles } from '@/styles/components/common/input.style';
import { COLORS } from '@/constants/Colors';

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      style={inputStyles.input}
      placeholderTextColor={COLORS.black3}
      {...props}
    />
  );
};

export default Input;