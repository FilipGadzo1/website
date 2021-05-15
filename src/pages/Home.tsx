import React, {ReactElement} from 'react';
import HeaderProfile from '../components/HeaderProfile'

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <HeaderProfile label={"Header profile"}/>
    )
}

export default Home;
