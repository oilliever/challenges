import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GetData = (page) => {
    // const [data, setData] = useState([]);

    // let API_URL = `https://www.themuse.com/api/public/jobs?page=${page}`;

    // useEffect(() => {
    //     const FetchData = async () => {
    //         try {
    //             const req = await fetch(API_URL);
    //             const res = await req.json();
    //             setData(res.results);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     FetchData();
    // }, []);

    // return data;
    const [data, setData] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themuse.com/api/public/jobs?page=${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id]);
    return data;
};

export const GetDetails = () => {
    const [data, setData] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themuse.com/api/public/jobs/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id]);
    return data;
};
