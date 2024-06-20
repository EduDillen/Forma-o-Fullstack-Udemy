import React from 'react'

const ConditionalRender = () => {
    const x = true;
    const name = "Eduardo";
  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {name === "Eduardo" ? (
            <div>
                <p>Olá Eduardo</p>
            </div>
        ): (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender