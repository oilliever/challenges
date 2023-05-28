import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { HomeJobs } from '../components/Home/HomeJobs';
import { CheckBox, Radio, TextInput } from '../components/Input';
import { Logo } from '../components/Logo';
import { Search } from '../components/Search';
import { useFetchForDetail } from '../hooks/useFetch';
import { CapitalizeWords } from '../tools/Capitalize';

const Home = () => {
    const [page, setPage] = useState(1);
    const [company, setCompany] = useState(null);
    const [companyTemp, setCompanyTemp] = useState(null);
    const [location, setLocation] = useState(null);
    const [locationTemp, setLocationTemp] = useState(null);

    let company_param = '';
    let location_param = '';
    if (company && company.length > 0) {
        company_param = `&company=${CapitalizeWords(company)}`;
    }

    if (location && location.length > 0) {
        location_param = `&location=${location}`;
    }

    let API_URL = `https://www.themuse.com/api/public/jobs?${company_param}${location_param}&page=${page}`;
    const { apiData } = useFetchForDetail(API_URL);

    let pageTotal = '';
    if (apiData !== null) {
        pageTotal = apiData.page_count - 1;
    }

    const handlePageChange = async (page) => {
        setPage(page.selected + 1);
    };
    const handleSearchClick = () => {
        setCompany(companyTemp);
        setLocation(locationTemp);
    };

    return (
        <div className='container'>
            <Logo />
            <Search
                onChange={(e) => setCompanyTemp(e.target.value)}
                onClick={handleSearchClick}
            />
            {!apiData ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className='jobs-content'>
                        <div className='home-sidebar'>
                            <CheckBox label='Full time' />
                            <div className='location-group'>
                                <TextInput
                                    label='location'
                                    startIcon={<PublicIcon />}
                                    placeholder='City, state, zip code or country'
                                    onChange={(e) =>
                                        setLocationTemp(e.target.value)
                                    }
                                />
                                <Radio label='Tokyo' />
                                <Radio label='London' />
                            </div>
                        </div>
                        <HomeJobs data={apiData.results} />
                    </div>
                    <ReactPaginate
                        previousLabel={<KeyboardArrowLeftIcon />}
                        nextLabel={<KeyboardArrowRightIcon />}
                        breakLabel={<MoreHorizIcon />}
                        pageCount={pageTotal}
                        marginPagesDisplayed={'1'}
                        pageRangeDisplayed={'3'}
                        onPageChange={handlePageChange}
                        className='pagination'
                        pageClassName='page-item'
                    />
                </>
            )}
        </div>
    );
};
export default Home;
