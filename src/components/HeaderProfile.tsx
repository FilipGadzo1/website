import React, {ReactElement} from 'react';
import NavBar from './NavBar';

export interface HeaderProfileProps {
    text: string;
}


const HeaderProfile: React.FC<HeaderProfileProps> = ({
    text
}: HeaderProfileProps): ReactElement => {

    return(
        <>
            <NavBar />
        </>
    )
}

export default HeaderProfile;