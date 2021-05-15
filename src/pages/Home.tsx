import React, {ReactElement} from 'react';
import HeaderProfile from '../components/HeaderProfile'

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <div>
            <div >
                <HeaderProfile label={"Header profile"}/>
            </div>

        </div>
        
    )
}

export default Home;
