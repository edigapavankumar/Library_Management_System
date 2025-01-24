import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import axiosInstance from '../api/axios';

const BookList = ({ refreshTrigger }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [refreshTrigger]);

    const fetchBooks = async () => {
        const response = await axiosInstance.get('/');
        setBooks(response.data);
    };

    const deleteBook = async (id) => {
        await axiosInstance.delete(`/${id}`);
        fetchBooks();
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Genre</TableCell>
                    <TableCell>Copies Available</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {books.map((book) => (
                    <TableRow key={book.id}>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.genre}</TableCell>
                        <TableCell>{book.copiesAvailable}</TableCell>
                        <TableCell>
                            <Button onClick={() => deleteBook(book.id)} color="error">
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default BookList;
