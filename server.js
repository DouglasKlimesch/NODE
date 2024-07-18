import express from 'express'
import { PrismaClient } from '@prisma/client'

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const user = [];

app.get('/usuarios', (req, res) => {
  res.status(200).json(user);
});

app.post('/usuarios', async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name
      }
    });
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});