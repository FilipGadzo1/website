import React, {ReactElement} from 'react';
import Intro from '../components/Intro';
import HeaderProfile from '../components/HeaderProfile'

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <div>
            <div >
                <HeaderProfile />
            </div>
            <div>
                <Intro title = {'Introduction'} content = {'In this CV you will read about our experience'}/>
            </div>

        </div>
        
    )
}

export default Home;
