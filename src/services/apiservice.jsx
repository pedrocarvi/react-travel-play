const apiUrl = 'http://localhost:8080';

// Cuando este el token, agregar el header en todas las llamadas
function getCommonHeaders() {
    const token = "1234"
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };
}

const apiService = {
    // Get All Posts
    getAllPosts: async () => {
        try {
            const response = await fetch(`${apiUrl}/posted/getAll`); //para agregar header -> ...getAll`, getCommonHeaders() )
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la llamada a la API: ${response.status} - ${errorData.message}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Get Post ById
    getPostById: async (id) => {
        try {
            const response = await fetch(`${apiUrl}/posted/getById/${id}`)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la llamada a la API: ${response.status} - ${errorData.message}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Post New Post
    postData: async (data) => {
        try {
            const response = await fetch(`${apiUrl}/posted/create`, {
                method: 'POST',
                body: JSON.stringify(data),
                ...getCommonHeaders()
            });
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Put Post'
    putPost: async (id) => {
        try {
            const response = await fetch(`${apiUrl}/posted/editPostById/${id}`)
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Delete Post
    deletePost: async (id) => {
        try {
            const response = await fetch(`${apiUrl}/posted/deletById/${id}`);
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Post User
    postUser: async (data) => {
        try {
            const response = await fetch(`${apiUrl}/user/create`, {
                method: 'POST',
                body: JSON.stringify(data),
                ...getCommonHeaders()
            });
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Get All User
    getAllUsers: async () => {
        try {
            const response = await fetch(`${apiUrl}/user/getAll`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la llamada a la API: ${response.status} - ${errorData.message}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Get User By Id
    getUserById: async (id) => {
        try {
            const response = await fetch(`${apiUrl}/user/get/${id}`)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la llamada a la API: ${response.status} - ${errorData.message}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Delete User
    deleteUser: async (id) => {
        try {
            const response = await fetch(`${apiUrl}/user/delete/${id}`);
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Post Comment
    postComment: async (data) => {
        try {
            const response = await fetch(`${apiUrl}/comment/create`, {
                method: 'POST',
                body: JSON.stringify(data),
                ...getCommonHeaders()
            });
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Get All Comments
    getAllComments: async () => {
        try {
            const response = await fetch(`${apiUrl}/comment/getAll`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error en la llamada a la API: ${response.status} - ${errorData.message}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
            throw error;
        }
    },
    // Delete Comment
    // deleteComment: async (id) => {
    //     try {
    //         const response = await fetch(`${apiUrl}/comment/delete/${id}`);
    //         if (!response.ok) {
    //             throw new Error('Error al realizar la solicitud');
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         console.error('Error en la llamada a la API:', error);
    //         throw error;
    //     }
    // }
};

export default apiService;
