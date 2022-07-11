import { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <>
      <form action="api/form" method="post">
        <label htmlFor="texto">Insira algo ai:</label>
        <input type="text" name="texto" id="texto" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Form;