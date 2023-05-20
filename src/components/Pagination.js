import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={<KeyboardArrowLeftIcon />}
            nextLabel={<KeyboardArrowRightIcon />}
            breakLabel={<MoreHorizIcon />}
            pageCount={'400'}
            marginPagesDisplayed={'1'}
            pageRangeDisplayed={'3'}
            onPageChange={onPageChange}
            containerClassName='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
        />
    );
};
