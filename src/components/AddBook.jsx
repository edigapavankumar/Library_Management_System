import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axiosInstance from '../api/axios';

const AddBook = ({ refreshBooks }) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        copiesAvailable: 0,
    });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosInstance.post('/', book);
        setBook({ title: '', author: '', genre: '', copiesAvailable: 0 });
        refreshBooks(); // Refresh the book list
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 4 }}>
            <TextField
                name="title"
                label="Title"
                value={book.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="author"
                label="Author"
                value={book.author}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="genre"
                label="Genre"
                value={book.genre}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="copiesAvailable"
                label="Copies Available"
                type="number"
                value={book.copiesAvailable}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Add Book
            </Button>
        </Box>
    );
};

export default AddBook;
