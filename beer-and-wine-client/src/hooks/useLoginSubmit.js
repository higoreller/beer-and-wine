import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// internal import
import UserServices from "@services/UserServices";
import { UserContext } from "@context/UserContext";
import { notifyError, notifySuccess } from "@utils/toast";

const useLoginSubmit = ({ setShowModal }) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    setLoading(true);
    const cookieTimeOut = 0.5;

    if (data.registerEmail && data.password) {
      UserServices.userLogin({
        registerEmail: data.registerEmail,
        password: data.password,
      })
        .then((res) => {
          setLoading(false);
          setShowModal(false);
          router.push(redirect || "/");
          notifySuccess("Login Success!");
          dispatch({ type: "USER_LOGIN", payload: res });
          Cookies.set("userInfo", JSON.stringify(res), {
            expires: cookieTimeOut,
          });
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });
    }

    if (data.name && data.email && data.password) {
      UserServices.userRegister({
        name: data.name,
        email: data.email,
        password: data.password,
      })
        .then((res) => {
          setLoading(false);
          setShowModal(false);
          notifySuccess(res.message);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err.response.data.message);
        });
    }
  };

  return {
    handleSubmit,
    submitHandler,
    register,
    errors,
    loading,
  };
};

export default useLoginSubmit;
