import React from 'react'
import Link from "next/link";
import { Email, Lock, Person } from "@styled-icons/material-outlined";
import { useCallback } from "react";

import { FormLink, FormWrapper, FormLoading, FormError } from "../Form";
import Button from "../Button";
import TextField from "../TextField";
import useLoginSubmit from "@hooks/useLoginSubmit";

const FormSignUp = ({ setShowModal, setShowLoginForm }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setShowModal);

  const handleSignInClick = useCallback(
    (event) => {
      event.preventDefault();
      setShowModal(true);
      setShowLoginForm(true);
    },
    [setShowModal, setShowLoginForm]
  );

  return (
    <FormWrapper>
      {errors.email && <FormError>{errors.email}</FormError>}
      {errors.password && <FormError>{errors.password}</FormError>}
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name="name"
          register={register}
          placeholder="Nome"
          type="text"
          error={errors.name}
          icon={<Person className="icon" />}
        />
        <TextField
          name="email"
          register={register}
          placeholder="Email"
          type="email"
          error={errors.email}
          icon={<Email className="icon" />}
        />
        <TextField
          name="password"
          register={register}
          placeholder="Password"
          type="password"
          error={errors.password}
          icon={<Lock className="icon" />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Cadastrar</span>}
        </Button>

        <FormLink>
          Já tem uma conta?{" "}
          <Link href="/" legacyBehavior>
            <a onClick={handleSignInClick}>Entrar</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
