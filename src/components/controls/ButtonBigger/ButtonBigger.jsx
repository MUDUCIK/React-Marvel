import { Style } from './Style'

const ButtonBigger = ({ text, ...props }) => <Style {...props}>{text}</Style>

export default ButtonBigger
