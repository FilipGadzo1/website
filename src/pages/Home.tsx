import React, {ReactElement} from 'react';
import Intro from '../components/Intro';
import HeaderProfile from '../components/HeaderProfile';

export interface HomeProps{

}

const Home: React.FC<HomeProps> = ({

}: HomeProps): ReactElement =>{
    return(
        <div>
            <section>
                <HeaderProfile text="Welcome to my portfolio!" />
            </section>
            <section className="h-96" id="about">
                <Intro 
                    title = {'- Introduction'}
                    content = {'In this CV you are going to get a sense of of our experience. ' +
                    'You will be able to see what languages we are proficient in and what other skills we have. ' +
                    'We will present something about ourselves as well and also get to know what kind of people we are.'}
                />
            </section>
        </div>
    )
}

export default Home;
