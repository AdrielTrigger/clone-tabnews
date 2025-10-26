import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({
    chave:
      "se estiver lendo isso, é porque você conseguiu fazer a página de status da api funcionar",
  });
}

export default status;
