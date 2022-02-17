const express = require("express")
const {v4: uuidv4} = require("uuid")

const app  = express()
app.use(express.json())

const custumers = []

app.post("/account", (request, response)=>{
    const {cpf, name} = request.body

    const customerAlreadyExists = custumers.some((customer) => customer.cpf === cpf )

    if(customerAlreadyExists){
        return response.status(400).json({"error":400, "message":"Usuário ja existe"})
    }

    custumers.push( { 
        cpf,
        name,
        id: uuidv4(),
        statement :[]
    })

    return response.status(201).send({"error":201, "message":"Sucesso ao criar!"})
})

app.listen(3333)