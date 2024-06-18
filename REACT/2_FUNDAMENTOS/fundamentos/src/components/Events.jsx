import React from 'react'

const Events = () => {

    const handleClick = () =>{
        console.log(e);
        console.log("Executou");
    }
    const render = (x) =>{
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }
    return 10 > 2 && <p>carregando...</p>

  return (
    <div>
        <div><button onClick ={()=> console.log("Testando um evento")}>Clique Aqui</button></div>

        <div>
           <button onClick={handleClick}>Clique aqui com função</button>
        </div>
        {render(true)}
        {render(false)}
    </div>
  )
}

export default Events