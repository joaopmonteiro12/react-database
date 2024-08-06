import React from "react";

const PostUser = props => {
    
    return(
        <div>
            <ul style={{ textAlign: "left", listStyleType: "none" }}> {/* JSX para a lista de users encontrados na base de dados */}
                {Object.keys(props.user).map(key => ( // Uso do Object.keys() para obter as chaves do objeto props.user e uso do método .map() para iterar ao longo delas
                <li>{key}: {props.user[key]}</li> // Renderiza cada chave e o valor do objecto correspondente a essa chave
                ))}
            </ul>
        </div>
    )
};

                
export default PostUser;