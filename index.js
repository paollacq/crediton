
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mockContracts = {
  "123456789": [
    {
      id: "abc123",
      storeName: "Loja Teste",
      total: 300,
      installments: 3,
      paid: 1,
      nextAmount: 100,
      dueInDays: 2
    }
  ]
};

app.get('/api/payments/user/:chatId', (req, res) => {
  const data = mockContracts[req.params.chatId] || [];
  res.json(data);
});

app.post('/api/payments/pay', (req, res) => {
  console.log("Pagamento simulado para contrato:", req.body.contractId);
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`CrediTON backend rodando na porta ${PORT}`);
});
