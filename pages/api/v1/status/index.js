function status(request, response) {
  response.status(200).json({
    chave:
      "se estiver lendo isso, é porque você conseguiu fazer a página de status da api funcionar",
  });
}

export default status;
