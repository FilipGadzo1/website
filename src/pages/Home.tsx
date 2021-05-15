import React, {ReactElement} from 'react';

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <p>Home page</p>
    )
}

export default Home;
