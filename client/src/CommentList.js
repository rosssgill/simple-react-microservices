import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    // We only want this effect to be called one time on rendering so we put empty array as second argument
    useEffect(() => {
        fetchData();
    }, []);

    // Mapping over array of comments and displaying them as list elements
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>
        {renderedComments}
    </ul>;
};

