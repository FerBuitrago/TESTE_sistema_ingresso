import express from 'express';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

/* inserção de dados do cliente */
app.post('/usuarios', async (req, res) => {

    await prisma.tb_cliente.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf
        }
    })
    
    res.status(201).json(req.body)
})

/* listar os clientes */
app.get('/usuarios', async (req, res) => {  

    const users = await prisma.tb_cliente.findMany()

    res.status(200).json(users)
})

/* edita os clientes */ 

app.put('/usuarios/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)

  await prisma.tb_cliente.update({
    where: { id },
    data: {
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
    },
  })

  res.status(201).json(req.body)
})

/* deletar os clientes */
app.delete('/usuarios/:id', async (req, res) => {  
  const id = parseInt(req.params.id, 10)

    await prisma.tb_cliente.delete({
        where: { id }
    }),

    res.status(200).json({ message: 'Usuario deletado com sucesso'})
})





app.listen(3000)






/*
criar a API de usuarios
zeLHyi4X7H5lxu2k
*/