import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
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

  const submitHandler = ({ registerEmail, password }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;

    if (registerEmail && password) {
      UserServices.userLogin({
        registerEmail,
        password,
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
