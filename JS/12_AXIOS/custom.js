const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",  //Cria uma base URL para que eu precise colocar apenas o destino final na requisição ao invés de escrever toda a URL.
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken"
    },
})