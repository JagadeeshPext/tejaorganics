import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';

import theme from './theme';

const passwordIcon = <Icon name="locked" size={20} color={theme.iconsColor} />;
const userIcon = <Icon1 name="user" size={20} color={theme.iconsColor} />;
const emailIcon = <Icon2 name="email" size={20} color={theme.iconsColor} />;
const mobileIcon = <Icon3 name="phone" size={20} color={theme.iconsColor} />;
 const backIcon = <Icon4 name="chevron-back" size={25} color={theme.iconsColor} />;

export const Icons = {passwordIcon, userIcon, emailIcon, mobileIcon,backIcon};
