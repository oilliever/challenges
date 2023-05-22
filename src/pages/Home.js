import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { HomeIndex } from '../components/home';

export const Home = () => {
    return (
        <div className='container'>
            <Logo />
            <HomeIndex />
            <Footer />
        </div>
    );
};
