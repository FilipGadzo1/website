import React, {ReactElement} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profile from '../images/profile.jpg';

export interface HeaderProfileProps {
    label: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
    label
}: HeaderProfileProps): ReactElement => {
    return(
        <p className="text-red-400">{label}</p>
    )
}

export default HeaderProfile;