// src: https://stackoverflow.com/a/48410935

db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { _id: 0, nome: 1 },
);
