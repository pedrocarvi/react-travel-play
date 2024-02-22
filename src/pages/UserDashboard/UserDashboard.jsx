import React from "react";
import NavigationBar from "../../shared/Navbar/NavigationBar";
import UserDataComponent from "../../components/UserDataComponent/UserDataComponent";
import Footer from "../../shared/footer/Footer";

const UserDashboard = () => {
  return (
    <div>
      <NavigationBar />
      <UserDataComponent />
      <Footer />
    </div>
  );
};

export default UserDashboard;
