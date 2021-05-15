import React, {ReactElement} from 'react';

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
            <div className="box-border h-48 p-4 mt-24 mx-32 mr-96 bg-blue-200 rounded-xl">
                <div className="h-8 pl-16 flex flex-wrap content-center">
                    <div className="text-2xl font-medium text-gray-700">
                        {title}
                    </div>
                </div>
                <div className="h-20 pl-16 flex flex-wrap content-center">
                    <div className="mr-48 text-base font-medium text-gray-700">
                        {content}
                    </div>
                </div>
            </div>
        )
    }

export default Intro;
