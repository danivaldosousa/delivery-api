import { Request, Response } from 'express'
import { FindAllDeliveriesClientUseCase } from './FindAllDeliveriesClientUseCase'

export class FindAllDeliveriesClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request
    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase()
    const deliveries = await findAllDeliveriesClientUseCase.execute(id_client)

    return response.json(deliveries)
  }
}
