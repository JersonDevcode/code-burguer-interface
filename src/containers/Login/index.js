
import React from "react";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useUser } from "../../hooks/UserContext";
import Button from '../../components/Button/index'
import LoginImg from '../../assets/Hamburguer.svg'
import Logo from '../../assets/code-burguer-title.svg'
import api from '../../services/api'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    ErrorMessage,
} from './styles'

function Login() {
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail Valido').required("O e-mail é obrigatrio"),
        password: Yup.string().required('A senha é obrigatoria').min(6, 'A senha deve ter no minimo 6 digitos')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }
        )

        putUserData(data)


    }


    return (
        <Container>
            <LoginImage src={LoginImg} />
            <ContainerItens>
                <img src={Logo} />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register('email')} error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>


                    <Button type="submit" style={{ marginTop: 75, marginBotton: 25 }}>Sign In</Button>
                </form>

                <SignInLink>Não possui conta? <Link style={{color: 'white'}} to= "/cadastro">Sign Up </Link></SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login