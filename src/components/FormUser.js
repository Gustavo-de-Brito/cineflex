import { useState } from "react";
import styled from "styled-components";

export default function FormUser({ setBuyerData, selectedSeats }) {
    const [ name, setName ] = useState("");
    const [ cpf, setCpf ] = useState("");

    function confirmPurchase() {
        setBuyerData({
            name: name,
            cpf: cpf,
            ids: selectedSeats,
        })
    }

    return (
        <Form onSubmit={confirmPurchase}>
            <InputContainer>
                <label htmlFor="name">Nome do Comprador:</label>
                <input id="name" value={ name } placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} required />
            </InputContainer>
            <InputContainer>
                <label htmlFor="cpf" >CPF do comprador:</label>
                <input id="cpf" value={ cpf } placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} required />
            </InputContainer>
            <button type="submit">Reservar Assento(s)</button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 42px;
    width: 100%;
    padding: 24px;

    button {
        margin: 50px;
        padding: 10px 20px;
        background-color: #E8833A;
        border-radius: 4px;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 18px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 12px;
    font-size: 18px;

    label {
        color: #293845;
        margin-bottom: 8px;
    }

    input {
        padding: 10px 18px;
        font-size: 18px;
    }

    input::-webkit-input-placeholder {
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
    
    input:-ms-input-placeholder {
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
    
    input::placeholder {
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
`;