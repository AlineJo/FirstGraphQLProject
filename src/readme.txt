# To run the project
#1 cmd : cd src
#2 cmd : node index.js
#3 open local host in browser : http://localhost:6969/graphql

#4 create select query in graphql gui
query{
  getAllUsers{
    first_name,
    last_name,
    email
  }
}


#5 create insert query in graphql gui
mutation{
  createUser(
    first_name:"joseph", 
    last_name:"ali",
    email:"test@mail.com",
    gender:"male", 
    ip_address:"255.255.255.255"){
    first_name,
    last_name,
    email
  }
}

            <============================>

            