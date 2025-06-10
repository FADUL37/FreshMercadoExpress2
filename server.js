const express = require('express');
const app = express();
const baseDir = `${__dirname}/build/`;

// Servir arquivos estáticos
app.use(express.static(baseDir));

// Redirecionar todas as rotas para index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: baseDir });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});