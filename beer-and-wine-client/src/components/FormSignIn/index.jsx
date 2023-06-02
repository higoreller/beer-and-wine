import Link from "next/link";
import { Email, Lock, ErrorOutline } from "@styled-icons/material-outlined";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FormLink, FormWrapper, FormLoading, FormError } from "../Form";
import { ForgotPassword } from "./style";
import Button from "../Button";
import TextField from "../TextField";
import useLoginSubmit from "@hooks/useLoginSubmit";
import { signInValidate } from "./../../utils/validations";

const FormSignIn = ({ setShowModal, setShowLoginForm }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setShowModal);
  const [formError, setFormError] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const routes = useRouter();
  const { push, query } = routes;

  const handleInput = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSignUpClick = useCallback(
    (e) => {
      e.preventDefault();
      setShowLoginForm(false);
      setShowModal(true);
    },
    [setShowModal, setShowLoginForm]
  );

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name="registerEmail"
          register={register}
          placeholder="Email"
          type="email"
          error={errors.registerEmail}
          onInputChange={(value) => handleInput("registerEmail", value)}
          icon={<Email className="icon" />}
        />
        <TextField
          name="password"
          register={register}
          placeholder="Password"
          type="password"
          error={errors.password}
          onInputChange={(value) => handleInput("password", value)}
          icon={<Lock className="icon" />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Entrar agora</span>}
        </Button>

        <FormLink>
          Não tem uma conta?{" "}
          <Link href="/" legacyBehavior>
            <a onClick={handleSignUpClick}>Cadastrar</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
