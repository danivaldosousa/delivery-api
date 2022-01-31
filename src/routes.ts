import { Router } from 'express'
import { ensureAutheticateClient } from './middlewares/ensureAutheticateClient'
import { ensureAutheticateDeliveryman } from './middlewares/ensureAutheticateDeliveryman'
import { AuthenticateClientController } from './modules/account/UseCases/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/UseCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/UseCases/createClient/CreateClientController'
import { FindAllDeliveriesClientController } from './modules/clients/useCases/deliveries/FindAllDeliveriesClientController'
import { CreateDeliveryController } from './modules/deliveries/UseCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/UseCases/findAllAvailable/FindAllAvailableController'
import { UpdateDeliverymanController } from './modules/deliveries/UseCases/updateDeliveryman/UpdateDeliverymanController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClientController = new FindAllDeliveriesClientController()
const createDeliveryController = new CreateDeliveryController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

routes.post('/client/authenticate/', authenticateClientController.handle)
routes.post('/client/', createClientController.handle)
routes.post(
  '/deliveryman/authenticate/',
  authenticateDeliverymanController.handle,
)
routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post(
  '/delivery/',
  ensureAutheticateClient,
  createDeliveryController.handle,
)
routes.get(
  '/delivery/available/',
  ensureAutheticateDeliveryman,
  findAllAvailableController.handle,
)
routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAutheticateDeliveryman,
  updateDeliverymanController.handle,
)
routes.get(
  '/client/deliveries/',
  ensureAutheticateClient,
  findAllDeliveriesClientController.handle,
)

routes.get(
  '/deliveryman/deliveries',
  ensureAutheticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle,
)

export { routes }
