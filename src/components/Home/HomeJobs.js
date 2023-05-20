import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const HomeJobs = () => {
    const [list, setList] = useState([]);
    const [pageCount, setpageCount] = useState(1);

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://www.themuse.com/api/public/jobs?page=1`
            );
            const data = await res.json();
            // const total = data.page_count;
            // const limit = data.items_per_page;
            // setpageCount(Math.ceil(total / limit));
            setList(data.results);
        };
        getComments();
    }, []);
    localStorage.setItem('jobs', JSON.stringify(list));
    const handlePageChange = async (page) => {
        setpageCount(page.selected + 1);
    };

    return (
        <>
            <div className='jobs-list'>
                {/* {list.map((e) => (
                    <JobCard
                        key={e.id}
                        Cover={`https://assets.themuse.com/uploaded/companies/${e.company.id}/small_logo.png`}
                        Author={e.company.name}
                        Title={e.name}
                        Type={e.type}
                        Location={
                            e.locations.length ? e.locations[0].name : 'Empty'
                        }
                        Time={moment(e.publication_date).fromNow()}
                        LinkTo={e.id}
                    />
                ))} */}
                <ReactPaginate
                    previousLabel={<KeyboardArrowLeftIcon />}
                    nextLabel={<KeyboardArrowRightIcon />}
                    breakLabel={<MoreHorizIcon />}
                    pageCount={'99'}
                    marginPagesDisplayed={'1'}
                    pageRangeDisplayed={'3'}
                    onPageChange={handlePageChange}
                    className='pagination'
                    pageClassName='page-item'
                />
            </div>
        </>
    );
};
