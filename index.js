const resultado = document.getElementById("resultado")
function fetchBook(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value
    console.log(nome)
    fetch(`https://openlibrary.org/search.json?q=${nome}&units=metric&lang=pt_br`)
    .then((res) => res.json())
    .then((data) => {
        resultado.innerHTML = `
        <div>
            <span class="text-white text-2xl">Nome do Livro</span>
            <span class="text-white text-2xl">${data.q}</span>
        </div>
        <div>
            <span class="text-white text-2xl">Nome do(a) autor(a)</span>
            <span class="text-white text-2xl">${data.docs.author_name}</span>
        </div>
        `
    })
}