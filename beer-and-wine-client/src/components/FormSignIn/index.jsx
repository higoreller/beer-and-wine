import Link from "next/link";
import { Email, Lock, ErrorOutline } from "@styled-icons/material-outlined";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FormLink, FormWrapper, FormLoading, FormError } from "../Form";
import { ForgotPassword } from "./style";
import Button from "../Button";
import TextField from "../TextField";
import { signInValidate } from "./../../utils/validations";

const FormSignIn = ({ setShowModal, setShowLoginForm }) => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState({});
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const { push, query } = routes;

  const handleInput = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ""}`,
    });

    if (result?.url) {
      return push(result?.url);
    }

    setLoading(false);

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Houve um problema com a requisição");
      }

      const data = await response.json();

      if (data.error) {
        setFormError(data.error);
      } else {
        setShowModal(false);
      }
    } catch (err) {
      setFormError(err.message);
    }

    setFieldError({});

    setFormError("Usuário ou senha inválidos");
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
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email className="icon" />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
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
