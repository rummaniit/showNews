import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Newss from '../Newss/Newss';



const Newspaper = () => {
    let [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=ff5394f4f1164cd19abc133736dcbb49')
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles)
                console.log(data)
            })
    }, [])
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                    articles.map(article =>
                        <Grid item xs={2} sm={4} md={4} >

                            <Newss
                                // key={articles.title}
                                article={article}>

                            </Newss>
                        </Grid>)
                }

            </Grid>

        </Box>
    );
};

export default Newspaper;


