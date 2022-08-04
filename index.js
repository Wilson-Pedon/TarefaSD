const api = require("./api");
const express = require("express");

const server = express();


server.use(express.json());

server.listen(8000);

server.get('/', (req,resp) => {
  return resp.send({message:"Bem Vindo"})
})


server.get("/pokemon/:id", async (req,resp) => {
  const {id} = req.params;
  try {
    const {data} = await api.get('pokemon/' + id);

    return resp.send({name: data.name});
  } catch (error) {
    resp.send({error : error.message});
  }
})