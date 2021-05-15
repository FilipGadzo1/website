import { link } from 'fs/promises';
import React, {ReactElement} from 'react';
import profile from '../images/profile.jpg';

export interface HeaderProfileProps {
}

export interface ProfileProps {

}

export interface ProfileTitleProp{
    title: string
}

const ProfileTitle: React.FC<ProfileTitleProp> = ({
    title
}: ProfileTitleProp): ReactElement => {
    const linkStyle=[
        "bg-blue-500",
        "font-bold",
        "py-2",
        "px-4",
        "border",
        "border-blue-700",
        "rounded",
        "hover:no-underline",
        "hover:text-white",
        "hover:bg-blue-700",
    ]

    const link = [
        {name: "Facebook", link: "https://www.facebook.com/"},
        {name: "Twitter", link: "https://twitter.com/home"},
        {name: "LinkedIn", link: "https://www.linkedin.com/feed/"}
    ];

    const linkList = link.map((links) => 
        <a href={links.link} className="pr-3 text-blue-500 hover:text-blue-300 hover:no-underline">{links.name}</a>
    )

    return(
        <div className="px-10 pt-24">
            <h1 className="font-extrabold text-4xl text-center">{title}</h1>
            <div className="text-center pl-4 pt-20">
                <a href="https://www.google.com/gmail/about/" className={linkStyle.join(" ")}>Email</a>
            </div>
            <div className="pt-32">
                {linkList}
            </div>
        </div>
    )
}


const ProfileImage: React.FC<ProfileProps> = ({

}: ProfileProps): ReactElement => {
    return (    
        <div>
            <img src={profile} alt="profile picture"  className="h-96 w-full rounded-3xl items-center "/>
        </div>
    )
}


const HeaderProfile: React.FC<HeaderProfileProps> = ({

}: HeaderProfileProps): ReactElement => {
    return(
        <div className="mx-80 my-5">
            <div className="grid grid-flow-row grid-flow-col">
                <ProfileTitle title="Hi, we are Filip and Zoki, two nerds"/>
                <ProfileImage />
            </div>
        </div>

    )
}

export default HeaderProfile;