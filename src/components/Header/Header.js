import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Header = () => {
    return (
        <div>
            <h1>Hey</h1>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                <Button>Save</Button>
            </Box>
        </div>
    );
};

export default Header;