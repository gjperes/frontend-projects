import { PrismaClient } from "@prisma/client";
import { NextPage } from "next";

const prisma = new PrismaClient();

type Users = {
  allUsers: [
    user: {
      id_usuario: number,
      login_usuario: string,
      nome_usuario: string,
      senha_usuario: string,
    }
  ],
}

const DBConn: NextPage<Users> = ({ allUsers }: Users) => {
  return (
    <>
      <ul>
        {allUsers.map((user) => {
          return <li key={user.id_usuario}>Id: {user.id_usuario} Login: {user.login_usuario} Nome: {user.nome_usuario} Senha: {user.senha_usuario}</li>
        })}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const allUsers = await prisma.tb_usuario.findMany();
  return { props: { allUsers } }
}

export default DBConn;