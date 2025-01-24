import React, { useState } from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const App = () => {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const refreshBooks = () => {
        setRefreshTrigger((prev) => prev + 1);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Library Management System</h1>
            <AddBook refreshBooks={refreshBooks} />
            <BookList refreshTrigger={refreshTrigger} />
        </div>
    );
};

export default App;
