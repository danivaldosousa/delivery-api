import { json } from 'express'
import { prisma } from '../../../../database/prismaClient'

interface IUpdateEndDate {
  id_delivery: string
  id_deliveryman: string
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
    const delivery = await prisma.deliveries.findFirst({
      where: {
        id: id_delivery,
        id_deliveryman,
        end_at: null,
      },
    })

    if (!delivery) {
      throw new Error('Delivery not found')
    }

    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
        end_at: null,
      },
      data: {
        end_at: new Date(),
      },
    })

    return delivery
  }
}
