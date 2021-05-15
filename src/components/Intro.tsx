import React, {ReactElement} from 'react';

export interface IntroProps{
    title: string;
    content?: string;
}

export interface SkillsProps{
    title: string;
    content: string;
}

const Skills: React.FC<SkillsProps> = (
    props: SkillsProps
): ReactElement => {
    const title = props.title;
    const content = props.content;

    const skillArray = [
        {skill: "JavaScript"},
        {skill: "React"},
        {skill: "C#"},
        {skill: "Java"}
    ];
    
    const skillMap = skillArray.map((skills) =>
        <p>{skills.skill}</p>
    )

    return(
        <div>
            <div className="h-8 pl-16 flex flex-wrap content-center">
                <div className="text-2xl font-medium text-gray-700">
                    {title}
                </div>
            </div>
            <div className="h-32 pl-16 flex flex-wrap content-center">
                <div className="mr-48 text-base font-medium text-gray-700">
                    {skillMap}
                </div>
            </div>
        </div>
    )
}

const Intro: React.FC<IntroProps> = (
    props: IntroProps
    ): ReactElement => {
        const title = props.title;
        const content = props.content;
        const box = [
            "box-border",
            "border-4",
            "h-48",
            "p-4",
            "mt-24",
            "mx-24",
            "bg-blue-200",
            "rounded-xl",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:-translate-y-1",
            "hover:scale-105"
        ];

        return(
            <div className="grid grid-flow-col auto-cols-fr">
                <div className={box.join(" ")}>
                    <div className="h-8 pl-12 flex flex-wrap content-center">
                        <div className="text-2xl font-medium text-gray-700">
                            {title}
                        </div>
                    </div>
                    <div className="h-20 pl-16 flex flex-wrap content-center">
                        <div className="mr-12 text-base font-medium text-gray-700">
                            {content}
                        </div>
                    </div>
                </div>
                    <div className={box.join(" ")}>
                        <Skills title="Skills" content="" />
                    </div>
            </div>
        )
    }

export default Intro;