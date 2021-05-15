import React, {ReactElement} from 'react';

export interface IntroProps{
    title: string;
    content?: string;
}

export interface SkillsProps{
    title: string;
}

const Skills: React.FC<SkillsProps> = (
    props: SkillsProps
): ReactElement => {
    const title = props.title;

    const skillArray = [
        {skill: "JavaScript"},
        {skill: "React"},
        {skill: "C#"},
        {skill: "Java"}
    ];
    
    const skillMap = skillArray.map((skills) =>
        <ul>
            <li>{skills.skill}</li>
        </ul>
    );

    return(
        <div>
            <div className="pl-16 content-center">
                <div className="text-2xl font-medium text-gray-700">
                    {title}
                </div>
            </div>
            <div className="pl-16 content-center">
                <div className="mr-48 text-base font-medium text-gray-700">
                    {skillMap}
                </div>
            </div>
        </div>
    );
}

const Intro: React.FC<IntroProps> = (
    props: IntroProps
    ): ReactElement => {
        const title = props.title;
        const content = props.content;
        const box = [
            "box-border",
            "border-4",
            "py-3",
            "mt-24",
            "mx-24",
            "bg-blue-200",
            "rounded-xl",
            "transition",
            "duration-300",
            "ease-in-out",
            "transform",
            "hover:-translate-y-1",
            "hover:scale-105",
            "object-scale-down"
        ];

        return(
            <div className="grid grid-flow-col">
                <div className={box.join(" ")}>
                    <div className="pl-12">
                        <div className="text-2xl font-medium text-gray-700">
                            {title}
                        </div>
                    </div>
                    <div className="pl-16">
                        <div className="mr-12 text-base font-medium text-gray-700">
                            {content}
                        </div>
                    </div>
                </div>
                    <div className={box.join(" ")}>
                        <Skills title="Skills" />
                    </div>
            </div>
        );
    }

export default Intro;