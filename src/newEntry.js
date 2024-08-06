import React, { useState } from "react";

const NewEntry = props => {
    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [gn, setGn] = useState("");
    const [tlf, setTlf] = useState("");
    
// Função que limpa os campos dos inputs
    const handleClean = event => {
        event.preventDefault();
        document.getElementById('userNome').value = "";
        document.getElementById('userUsername').value = "";
        document.getElementById('userGn').value = "";
        document.getElementById('userTlf').value = "";
        document.getElementById('userNome').focus();
    };

//Função de callback para adicionar um novo utilizador à base de dados
    const handleSubmit = event => {
        event.preventDefault();
        if(document.getElementById('userNome').value && document.getElementById('userUsername').value && document.getElementById('userGn').value && document.getElementById('userTlf').value) { // Garante que todos os campos estão preenchidos
            let newID = props.bd.data[props.bd.data.length - 1].id + 1; // Cria um ID para o próximo usuário com base no tamanho atual do array de users (maneira de ultrapassar id repetido ao remover users)
            let newEntry = { // Cria a nova entrada de user com os dados introduzidos nos campos
                id: newID,
                nome: nome,
                username: username,
                gn: gn,
                tlf: tlf
            }
            props.handleNewEntry(newEntry); // Chama a função que lida com adicionar users na base de dados passando um objeto com os dados do user
        } else {
            alert('Inserir todos os dados do user!'); // Caso todos os campos não estejam preenchidos
        };
    };

    return(
        <div>
            <h2>Introduzir novo user</h2>
            <form onSubmit={handleSubmit}> {/* JSX do formulário */}
                <fieldset style={{ margin: "0 auto", textAlign: "left", width: "300px" }}>
                    <legend>Inserir dados</legend>
                    <label>Nome: <input placeholder="Inserir nome" id="userNome" onChange={(event)=>{setNome(event.target.value)}}></input></label><br></br>
                    <label>Username: <input placeholder="Inserir username" id="userUsername" onChange={(event)=>{setUsername(event.target.value)}}></input></label><br></br>
                    <label>Género: <input placeholder="Inserir género (M ou F)" id="userGn" onChange={(event)=>{setGn(event.target.value)}}></input></label><br></br>
                    <label>Telefone: <input placeholder="Inserir telefone" id="userTlf" onChange={(event)=>{setTlf(event.target.value)}}></input></label><br></br>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" style={{ marginRight: "2px"}}>Submeter</button><button onClick={handleClean}>Limpar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default NewEntry;