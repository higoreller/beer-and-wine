import requests from "./httpServices";

const UserServices = {
  userLogin(body) {
    return requests.post("/user/login", body);
  },

  userRegister(token, body) {
    return requests.post(`/user/register/${token}`, body);
  },
};

export default UserServices;
