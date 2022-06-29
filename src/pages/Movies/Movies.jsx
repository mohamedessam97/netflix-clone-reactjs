import React, { useEffect, useState } from 'react';
import axios from "axios"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ListItem from '../../components/ListItem/ListItem';
import './movies.css'
const Movies = () => {
    const [movies, setMovies] = useState(null)
    const [data, setData] = useState([])
    const [genr , setGenre] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/movie/all")
            setData(res.data)
            setMovies(res.data)
            // console.log(res.data);
        }
        fetchData();
    }, []);

    const handleChange =(e)=>{
        setGenre(e.target.value)
    }
    useEffect(()=>{
        if(genr === 'All'){
            setMovies(data)
        }else{
            const m =data.filter(d=>{
                return d.genre.includes(genr)
            })
            setMovies(m)
        }
    },[genr])


    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: "150px" }}>
                <div className="category">
                    <span>Movies</span>
                    <select
                        name="genre"
                        id="genre"
                        onChange={handleChange}
                    >
                        <option value="All" defaultValue>All</option>
                        <option value="Horror">Horror</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>

                {movies && <Grid container spacing={0}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={3} sx={{ mb: "20px" }}>
                                <ListItem key={movie._id} item={movie} />
                            </Grid>
                        )
                    })}
                </Grid>}
            </Container>
        </div>
    );
}

export default Movies;
