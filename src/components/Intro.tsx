import React, {ReactElement} from 'react';
import '../styles/intro.css';
import {Container, Row, Col} from 'react-bootstrap';

export interface IntroProps{
    title: string;
    content?: string;
}

const Intro: React.FC<IntroProps> = (
    props: IntroProps
    ): ReactElement => {
        const title = props.title;
        const content = props.content;
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <div className="title">
                        {title}
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="content">
                        {content}
                    </div>
                </Row>
            </Container>
        )
    }

export default Intro;
