import { useState } from "react";
import './formulario.css';

const Formulario = () => {
    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const calcularIMC = () => {
        const alturaEmMetros = altura / 100;
        const imc = peso / (alturaEmMetros * alturaEmMetros);
        return imc.toFixed(2);
    }

    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc >= 18.5 && imc < 24.9) return "Peso normal";
        if (imc >= 25 && imc < 29.9) return "Sobrepeso";
        if (imc >= 30 && imc < 34.9) return "Obesidade grau I";
        if (imc >= 35 && imc < 39.9) return "Obesidade grau II";
        return "Obesidade grau III";
    }

    const renderizaResultado = () => {
        if (peso && altura) {
            const imc = calcularIMC();
            return (
                <div className="resultado">
                    <p>{nome}, seu IMC é {imc}</p>
                    <p>Classificação: {classificarIMC(imc)}</p>
                </div>
            );
        }
        return null;
    }

    return (
        <form className="formulario">
            <input 
                type="text" 
                placeholder="Seu nome" 
                onChange={evento => setNome(evento.target.value)} 
                className="input-nome"
            />
            <input 
                type="number" 
                placeholder="Peso (kg)" 
                onChange={evento => setPeso(Number(evento.target.value))} 
                className="input-nota"
            />
            <input 
                type="number" 
                placeholder="Altura (cm)" 
                onChange={evento => setAltura(Number(evento.target.value))} 
                className="input-nota"
            />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;
