import React from "react";
import PostDatabase from "./databasePost";

const DatabaseTable = props => {

    return(
        <div>
            <h2>Database</h2>
            <table style={{ marginLeft: "auto", marginRight: "auto", borderCollapse: "collapse"}}> {/* JSX para a tabela. Primeira linha com os títulos de cada coluna */}
                <th style={{ padding: "5px 20px 5px 20px", border: "1px solid black"}}>ID</th>
                <th style={{ padding: "5px 40px 5px 40px", border: "1px solid black"}}>Nome</th>
                <th style={{ padding: "5px 20px 5px 20px", border: "1px solid black"}}>Username</th>
                <th style={{ padding: "5px 20px 5px 20px", border: "1px solid black"}}>Género</th>
                <th style={{ padding: "5px 20px 5px 20px", border: "1px solid black"}}>Telefone</th>
                <th style={{ padding: "5px 20px 5px 20px", border: "1px solid black"}}>Eliminar</th>
                {props.bd.data.map(user => ( // Utilização do método .map() para iterar sobre os elementos do array na bd.data passada por props. Para cada um dos elementos vai renderizar o componente seguinte
                    <PostDatabase key={user.id} user={user} handleRemoveUser={props.handleRemoveUser}/> // Componente que cria cada linha respetiva a cada utilizar existente na base de dados.Envia props: user e função que lida com remoção de utilizadores
                ))}
            </table>
        </div>
    )
};

export default DatabaseTable;