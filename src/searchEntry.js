import React, { useState } from "react";
import PostUser from "./postUser";

const SearchEntry = props => {
    const [nome, setNome] = useState("");
    const [result, setResult] = useState([]);

// Função que limpa o campo dos input e atualiza os valores nome e result
    const handleClean = event => {
        event.preventDefault();
        document.getElementById('searchUserNome').value = "";
        setNome("");
        document.getElementById('searchUserNome').focus();
        setResult([]);
    };

//Função de callback para procurar users na base de dados

    const handleSubmit = event => {
        event.preventDefault();
        console.log(nome);
        props.bd.findUsers({nome: nome}) // Chama a função findUsers enviando como argumento o nome inserido no campo e procura por todas as instâncias
            .then(result => {
                setResult(result) // Caso encontre faz o update de result
                console.log(result)
            })
            .catch(error => {
                console.error(error);
                alert("User não encontrado"); // Caso não encontre envia um alerta
            })
            handleClean(event);
    };


    return(
        <div>
            <h2>Pesquisar user</h2>
            <form onSubmit={handleSubmit}> {/* JSX do formulário de pesquisa */}
                <fieldset style={{ margin: "0 auto", textAlign: "left", width: "300px" }}>
                    <legend>Pesquisar</legend>
                    <label>Nome: <input placeholder="Inserir nome" id="searchUserNome" onChange={(event)=>{setNome(event.target.value)}}></input></label><br></br>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" style={{ marginRight: "2px"}}>Pesquisar</button><button onClick={handleClean}>Limpar</button>
                    </div>
                </fieldset>
            </form>
            <br></br>
            {result.map(user => ( // Uso do método .map() para iterar pelo array de resultados. Para cada um dos elementos vai renderizar o componente seguinte
                <PostUser key={user.id} user={user}/>
            ))}
            <br></br>
        </div>
    )
};

export default SearchEntry;