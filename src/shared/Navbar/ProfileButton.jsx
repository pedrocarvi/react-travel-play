import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/my-account")}
    >
      Perfil
    </button>
  );
};

export default ProfileButton;