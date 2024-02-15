import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {

    const [photo, setPhoto] = useState([]);

    const [input, setInput] = useState('물');
    const [search, setSearch] = useState('');

    const inputHandler = e => {
        console.log(e.target.value);
        const { value } = e.target;
        setInput(value);
    }

    const submitHandler = e => {
        e.preventDefault();
        // if (input.length < 3) {
        //     alert('더 밉력해~~~');
        //     return;
        // }
        setSearch(input);
        console.log(input.length);
    }

    const getData = async () => {
        const r = await axios.get(`https://pixabay.com/api/?key=21103852-9b5f4834542caaf4eef2c8533&q=${search}&image_type=photo&per_page=200`);
        const d = r.data.hits;
        setPhoto(d);
        console.log(d);
    }

    useEffect(() => {
        getData();
    }, [search])



    return (
        <>
            <header>
                <h1>
                    lee 이미지 검색 {search}
                </h1>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={inputHandler} />
                    <button>SEARCH</button>
                </form>
            </header>
            <ul className="list">
                {
                    photo.map((it, idx) => {
                        return (
                            <li>
                                <img src={it.largeImageURL} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
            <footer>
                &copy; lee.
            </footer>
        </>
    )
}

export default Search;