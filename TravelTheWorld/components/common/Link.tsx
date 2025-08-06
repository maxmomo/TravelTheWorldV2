import { linkStyles } from '@/styles/components/common/link.style';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

{/* === PROPS === */ }
interface Props extends TouchableOpacityProps {
    title: string;
}

const Link = ({ title, ...props }: Props) => {
    return (
        <TouchableOpacity style={linkStyles.linkContainer} {...props}>
            <Text style={linkStyles.linkText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Link;