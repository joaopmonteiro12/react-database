import React, { useState } from "react";
import Database from "./database";
import DatabaseTable from "./databaseStructure";
import NewEntry from "./newEntry";
import SearchEntry from "./searchEntry";

const Structure = () => {
    const initialDatabase = new Database();
    const [database, setDatabase] = useState(initialDatabase);

// Função para atualizar a base de dados com uma nova entrada. Recebe newEntry como prop de componente filho
    const handleNewEntry = newEntry => {
        setDatabase(prevDatabase => ({ // Chamada da função que atualiza a base de dados e que recebe o estado anterior (prevDatabase)
            ...prevDatabase, // Espalhar o estado anterior 
            data: [...prevDatabase.data, newEntry], // Espalhar o estado anterior e adicionar a newEntry
            findUsers(searchObj) {
                let foundUsers = this.data.filter(user => {
                  for (let key in searchObj) {
                    if (user[key] !== searchObj[key]) {
                      return false;
                    }
                  }
                  return true;
                });
              
                if (foundUsers.length > 0) {
                  return Promise.resolve(foundUsers);
                } else {
                  return Promise.reject(new Error("Nenhum usuário encontrado"));
                }
            }
        }));
        
    };

// Função para atualizar a base de dados para remover uma entrada. Recebe entryRemoved como prop de componente filho
    const handleRemoveUser = entryRemoved => {
        setDatabase(prevDatabase => ({
            ...prevDatabase,
            data: prevDatabase.data.filter(user => user.id !== entryRemoved), // Utilizar o método .filter() para só ficarem os users cujo o ID é diferente do ID do user a ser removido da base de dados
            findUsers(searchObj) {
                let foundUsers = this.data.filter(user => {
                  for (let key in searchObj) {
                    if (user[key] !== searchObj[key]) {
                      return false;
                    }
                  }
                  return true;
                });
              
                if (foundUsers.length > 0) {
                  return Promise.resolve(foundUsers);
                } else {
                  return Promise.reject(new Error("Nenhum usuário encontrado"));
                }
            }
        }));
    }

    return (
        <div>
            <DatabaseTable bd={database} handleRemoveUser={handleRemoveUser}/> {/* Componente que cria a tabela dos utilizadores. Envia props: database e função que lida com remover utilizadores */}
            <NewEntry bd={database} handleNewEntry={handleNewEntry} /> {/* Componente com formulário que permite a introdução de dados para adicionar novo utilizador. Envia props: database e função que lida com adicionar utilizadores */}
            <SearchEntry bd={database} /> {/* Componente com formulário para a pesquisar de users na base de dados usando o nome. Envia props: database */}
        </div>
    )
};

export default Structure;