import React, {ReactElement} from 'react';
import Intro from '../components/Intro';

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <Intro title={'title'}/>
    )
}

export default Home;
