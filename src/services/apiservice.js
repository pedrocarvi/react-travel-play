const apiUrl = "http://localhost:8080";

let authToken = "";

function setAuthToken(token) {
  authToken = token;
}

function getCommonHeaders() {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
}

const apiService = {
  signup: async (data) => {
    try {
      const response = await fetch(`${apiUrl}/auth/register`, data);
      const responseData = await response.json();
      setAuthToken(responseData.token);
      console.log("token: ", responseData);
      return responseData;
    } catch (error) {
      console.error("Error en la llamada a la API - Sign Up:", error);
      throw error;
    }
  },
  // Get All Posts
  getAllPosts: async () => {
    try {
      const response = await fetch(`${apiUrl}/posted/getAll`); //para agregar header -> ...getAll`, getCommonHeaders() )
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Get Post ById
  getPostById: async (id) => {
    try {
      const response = await fetch(`${apiUrl}/posted/getById/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Get Posts By User
  getPostsByUserId: async (id) => {
    try {
      const response = await fetch(`${apiUrl}/posted/getAllPostByUuser/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Post New Post
  postData: async (data) => {
    try {
      const response = await fetch(`${apiUrl}/posted/create`, {
        method: "POST",
        body: JSON.stringify(data),
        ...getCommonHeaders(),
      });
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Put Post'
  updatePost: async (id, data) => {
    try {
      const response = await fetch(`${apiUrl}/posted/editPostById/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        ...getCommonHeaders(),
      });

      if (!response.ok) {
        if (response.status === 200 && response.statusText) {
          return response.statusText;
        }
        throw new Error("Error al realizar la solicitud");
      }
      const responseData = await response.json();
      return responseData || response.statusText;
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Delete Post
  deletePost: async (id) => {
    try {
      const response = await fetch(`${apiUrl}/posted/deletById/${id}`);
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Post User
  postUser: async (data) => {
    try {
      const response = await fetch(`${apiUrl}/user/create`, {
        method: "POST",
        body: JSON.stringify(data),
        ...getCommonHeaders(),
      });
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Get All User
  getAllUsers: async () => {
    try {
      const response = await fetch(`${apiUrl}/user/getAll`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Get User By Id
  getUserById: async (id) => {
    try {
      const response = await fetch(`${apiUrl}/user/get/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Delete User
  deleteUser: async (id) => {
    try {
      const response = await fetch(`${apiUrl}/user/delete/${id}`);
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Post Comment
  postComment: async (data) => {
    try {
      const response = await fetch(`${apiUrl}/comment/create`, {
        method: "POST",
        body: JSON.stringify(data),
        ...getCommonHeaders(),
      });
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      throw error;
    }
  },
  // Get All Comments
  getAllComments: async () => {
    try {
      const response = await fetch(`${apiUrl}/comment/getAll`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error en la llamada a la API: ${response.status} - ${errorData.message}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
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
