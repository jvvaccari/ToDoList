import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import styles from './InputContent.module.css';

const inputContent = () => {
    return (
        <div className={styles.input_content}>
            <h2>What do you do?</h2>
            <div>
                <TextField id="outlined-basic" label="Título" variant="outlined" size="small" sx={{width: '320px'}}/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Dificuldade" variant="outlined" size="small" sx={{width: '320px'}}/>
            </div>
            <Button variant="contained" sx={{width: '320px',backgroundColor: '#61dafb',color: 'black'}}>Cadastrar</Button>
        </div> 
    );
}

export default inputContent;
