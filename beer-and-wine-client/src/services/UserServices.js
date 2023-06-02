import requests from "./httpServices";

const UserServices = {
  userLogin(body) {
    return requests.post("/user/login", body);
  },

  userRegister(body) {
    return requests.post("/user/register", body);
  },
};

export default UserServices;
