import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';
import { primaryButtonStyles } from '@/styles/components/common/primaryButton.style';

{/* === PROPS === */ }
interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;                               
  small?: boolean;    
  disabled?: boolean;   
  half?: boolean;               
}

export default function PrimaryButton({ title, small, disabled, half, ...props }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        primaryButtonStyles.button,
        disabled && primaryButtonStyles.disabled,
        small && primaryButtonStyles.smallButton,
        half && primaryButtonStyles.halfButton
      ]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[primaryButtonStyles.text, small && primaryButtonStyles.smallText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}