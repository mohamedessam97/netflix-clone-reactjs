import React from 'react';
import Stack from '@mui/material/Stack';
import ListItem from '../ListItem/ListItem';
import './List.css'

const List = () => {
    return (
        <div className="list">
            <div className="listTitle">Continue to watch</div>
            <Stack direction="row" spacing={1} className='list' mb={5} >
                <ListItem index={0}/>
                <ListItem index={2}/>
                <ListItem index={2}/>
                <ListItem index={2}/>
                <ListItem index={2}/>
                <ListItem index={2}/>
            </Stack>
        </div>
    );
}

export default List;
