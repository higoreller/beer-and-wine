import Link from "next/link";
import { Email, Lock, ErrorOutline } from "@styled-icons/material-outlined";
import { useCallback } from "react";

import { FormLink, FormWrapper, FormLoading, FormError } from "../Form";
import Button from "../Button";
import TextField from "../TextField";
import useLoginSubmit from "@hooks/useLoginSubmit";

const FormSignIn = ({ setShowModal }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit({ setShowModal });

  return (
    <FormWrapper>
      {errors.registerEmail && (
        <FormError>{errors.registerEmail.message}</FormError>
      )}
      {errors.password && <FormError>{errors.password.message}</FormError>}
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name="registerEmail"
          placeholder="Email"
          type="email"
          error={errors.registerEmail}
          {...register("registerEmail")}
          icon={<Email className="icon" />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password}
          {...register("password")}
          icon={<Lock className="icon" />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Entrar agora</span>}
        </Button>

        <FormLink>
          Não tem uma conta?{" "}
          <Link href="/" legacyBehavior>
            <a>Cadastrar</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
