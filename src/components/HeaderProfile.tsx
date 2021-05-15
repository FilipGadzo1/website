import Reat, {ReactElement} from 'react';

export interface HeaderProfileProps {
    label: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
    label
}: HeaderProfileProps): ReactElement => {
    return(
        <p>{label}</p>
    )
}

export default HeaderProfile;