import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
  username: string
  password: string
}
export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (clientExist) {
      throw new Error('Client already exists')
    }

    const passwordHash = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: passwordHash,
      },
    })

    return client
  }
}
