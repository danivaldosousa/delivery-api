import { prisma } from '../../../../database/prismaClient'

interface ICreateDelivery {
  item_name: string
  id_client: string
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDelivery) {
    const idclientExist = await prisma.clients.findFirst({
      where: {
        id: id_client,
      },
    })

    if (!idclientExist) {
      throw new Error("Id_client isn't exists")
    }

    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    })
    return delivery
  }
}
