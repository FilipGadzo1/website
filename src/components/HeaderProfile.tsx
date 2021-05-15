import React, {ReactElement} from 'react';
import {Container, Row} from 'react-bootstrap';

export interface HeaderProfileProps {
    label: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
    label
}: HeaderProfileProps): ReactElement => {
    return(
        <Row>
            <Container>
                <p>{label}</p>
            </Container>
        </Row>
    )
}

export default HeaderProfile;