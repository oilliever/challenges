import { useState } from 'react';
import { HomeJobs } from '../components/Home/HomeJobs';
import { HomeSidebar } from '../components/Home/HomeSidebar';
import { Logo } from '../components/Logo';
import { Search } from '../components/Search';

const Home = () => {
    const [search, setSearch] = useState(null);
    const handleSearchClick = () => {
        console.log(search);
    };
    return (
        <div className='container'>
            <Logo />
            <Search
                onChange={(e) => setSearch(e.target.value)}
                onClick={handleSearchClick}
            />
            <div className='jobs-content'>
                <HomeSidebar />
                <HomeJobs />
            </div>
        </div>
    );
};
export default Home;
