import React, {ReactElement} from 'react';

export interface SkillsProps{
    title: string;
    content: string;
}

const Skills: React.FC<SkillsProps> = (
    props: SkillsProps
): ReactElement => {
    const title = props.title;
    const content = props.content;
    const box = [
        "box-border",
        "border-4",
        "h-48",
        "p-4",
        "mt-24",
        "mx-32",
        "mr-96",
        "bg-blue-200",
        "rounded-xl",
        "transition",
        "duration-300",
        "ease-in-out",
        "transform",
        "hover:-translate-y-1",
        "hover:scale-105"
    ]

    return(
        <div className={box.join(" ")}>
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

export default Skills;