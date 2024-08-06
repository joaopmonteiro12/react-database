import React from "react";

const PostDatabase = props => {
    
// Função de callback para remover um usuário
    const removeEntry = event => {
        event.preventDefault();
        props.handleRemoveUser(props.user.id); // Chama a função de remoção passando o ID do usuário a ser removido
    }

    return(
            <tr key={props.user.id}> {/* JSX para gerar a linha da tabela com os dados de cada user */}
                <td style={{ border: "1px solid black" }}>{props.user.id}</td>
                <td style={{ border: "1px solid black" }}>{props.user.nome}</td>
                <td style={{ border: "1px solid black" }}>{props.user.username}</td>
                <td style={{ border: "1px solid black" }}>{props.user.gn}</td>
                <td style={{ border: "1px solid black" }}>{props.user.tlf}</td>
                <td style={{ border: "1px solid black" }}>
                    <button onClick={removeEntry}>X</button>
                </td>
            </tr>
    )
};

export default PostDatabase;