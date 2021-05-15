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
    return(
        <div >
            <h1 className="px-10 pt-40 font-extrabold text-4xl text-center">{title}</h1>
            <div className="text-center pt-10">
                <a href="https://www.linkedin.com/feed/" className="bg-blue-500 hover:bg-blue-700 hover:text-white hover:no-underline font-bold py-2 px-4 border border-blue-700 rounded">Email</a>
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