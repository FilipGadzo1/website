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
                <div className="justify-center">
                    <div className="text-2xl">
                        {title}
                    </div>
                </div>
                <div className="">
                    <div className="content">
                        {content}
                    </div>
                </div>
            </div>
        )
    }

export default Intro;
