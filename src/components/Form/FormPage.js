import React from "react"
import { ContainerForm, BoxImg, ButtonClose, BoxForm, ButtonForm } from "./styled";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import screencellphone from "../../assets/images/screencellphone.png";


const FormPage = (props) => {
    const [form, onChange, clear] = useForm({
      nome: "",
      cargo: "",
      email: "",
      telefone: "",
    });

   
    const onSubmitForm = () => {
      alert("Enviado com sucesso")
      clear()
    };

    const onClickClose = () => {
      props.setFormOpen(false)
    }
  
    return (
      <ContainerForm>
        <BoxImg>
      <img src={screencellphone} alt="screencellphone" />
      </BoxImg>
        <BoxForm>
          <ButtonClose>
          <Button onClick={onClickClose} >X</Button>
          </ButtonClose>
          <h2>Descubra como estão as máquinas da sua empresa!</h2>
          <form onSubmit={onSubmitForm}>
            <TextField
              name="nome"
              type="nome"
              value={form.nome}
              onChange={onChange}
              placeholder="Insira seu nome"
              required
            />
            <TextField
              name="cargo"
              type="cargo"
              value={form.cargo}
              onChange={onChange}
              placeholder="Insira seu cargo"
              required
            />
            <TextField
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Insira seu E-mail"
              required
            />
            <TextField
              name="telefone"
              type="telefone"
              value={form.telefone}
              onChange={onChange}
              // inputProps={{
              //   pattern:
              //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",
              // }}
              // title={
              //   "A senha deve ter no mínimo seis caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número!"
              // }
              placeholder="(XX)XXXX-XXXX"
              required
            /> 
            <ButtonForm>
              <Button onClick={onSubmitForm}>ENVIAR</Button>
            </ButtonForm>
          </form>
        </BoxForm>
      </ContainerForm>
    );
  };
  export default FormPage;