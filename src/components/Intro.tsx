import React, {ReactElement} from 'react';
import '../styles/intro.css';

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
            <div>
                <p>{title}</p>
            </div>
        )
    }

export default Intro;
