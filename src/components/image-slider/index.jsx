import axios from 'axios';
import { useEffect, useState } from 'react';

const ImageSlider = ({ url, page = 1, limit = 10 }) => {
    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // async function fetchImages(getUrl) {
    //     try {
    //         setLoading(true);
    //         const res = await fetch(`${url}?page=${page}&limit=${limit}`);
    //         const data = await res.json();

    //         if (data) {
    //             setImage(data);
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         setErrorMessage(error.message);
    //         setLoading(false);
    //     }
    // }

    const fetchImages = async () => {
        await axios
            .get(`${url}?page=${page}&limit=${limit}`)
            .then((res) => {
                setImage(res.data);
                setLoading(false);
            })
            .catch((e) => {
                setErrorMessage(e.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url]);

    console.log(image);

    if (loading) {
        return <div>Loading data !</div>;
    }

    if (errorMessage !== null) {
        return <div>Something went wrong !!! {errorMessage}</div>;
    }

    return <div></div>;
};

export default ImageSlider;
