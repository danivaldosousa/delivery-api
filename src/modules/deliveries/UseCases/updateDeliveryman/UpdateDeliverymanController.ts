import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase'

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params
    const { id_deliveryman } = request

    const updateDeliverymanCaseUse = new UpdateDeliverymanUseCase()
    const delivery = await updateDeliverymanCaseUse.execute({
      id_deliveryman,
      id_delivery,
    })
    return response.json(delivery)
  }
}
