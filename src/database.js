import React from'react'


class Database {  
constructor() {
    this.data = [
      {
        id: 1,
        nome: "Maria Antonia",
        username: "mant",
        gn: "F",
        tlf: "3519394459"
      },
      {
        id: 2,
        nome: "Josefa Maria",
        username: "josm",
        gn: "f",
        tlf: "3519394458"
      },
      {
        id: 3,
        nome: "Mario Joao",
        username: "mj",
        gn: "m",
        tlf: "3519394456"
      },
	  {
        id: 4,
        nome: "Maria Antonia",
        username: "mant1",
        gn: "F",
        tlf: "3519394459"
      },
      {
        id: 5,
        nome: "Josefa Maria",
        username: "josm",
        gn: "f",
        tlf: "3519394458"
      },
      {
        id: 6,
        nome: "Mario Joao",
        username: "mj",
        gn: "m",
        tlf: "3519394456"
      }
    ];
  }

  findUser(searchObj) {
    //Flag para indicar se fulfill ou reject a promise
    let found = false;
    //Se for encontrado, esta variavel contem os dados do user
    let foundUser = {};
    //Qual o campo para testar se o objeto existe
    const field = Object.keys(searchObj);

    return new Promise((fulfill,reject) => {
      for (var i=0;i<this.data.length;i++) {
        if (this.data[i][field] === searchObj[field]) {
          found = true;
          foundUser = this.data[i];
          break;
        }
      }

      //Se encontramos o user temos q fazer fulfill da promise com objeto
      if (found === true) {
        fulfill(foundUser);
      }
      //se não fazemos reject
      else {
        reject(new Error("user não encontrado"));
      }
    });
  }

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
}

export default Database; 