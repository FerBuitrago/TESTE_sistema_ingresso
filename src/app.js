import express from 'express'
import cliente from './routes/cliente.js'
import filme from './routes/filme.js'
import sala from './routes/sala.js'
import sessao from './routes/sessao.js'
import lanche from './routes/lanche.js'

const app = express()
app.use(express.json())

app.use('/clientes', cliente)
app.use('/filmes', filme)
app.use('/salas', sala)
app.use('/sessoes', sessao)
app.use('/lanches', lanche)

export default app
