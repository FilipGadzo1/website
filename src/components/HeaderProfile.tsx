import React, {ReactElement} from 'react';

export interface HeaderProfileProps {
    label: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
    label
}: HeaderProfileProps): ReactElement => {
    return(
        <p className="text-red-400">{label}</p>
    )
}

export default HeaderProfile;