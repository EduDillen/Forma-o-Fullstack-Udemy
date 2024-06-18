// import React from 'react'

const TemplateExpression = () => {
  const name = "Eduardo"
  const data = {
    age: 22,
    job: "programador"
  }
  
    return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem vindo {name} </h3>
        <p>Sua idade é {data.age} anos e você é um {data.job}.</p>
    </div>
  )
}

export default TemplateExpression