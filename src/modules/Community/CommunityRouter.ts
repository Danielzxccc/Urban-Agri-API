import upload from '../../config/multer'
import { UserGuard } from '../AuthGuard/UserGuard'
import * as CommunityController from './CommunityController'
import express from 'express'

export const CommunityRouter = express.Router()

CommunityRouter.post(
  '/questions',
  UserGuard(['farm_head']),
  CommunityController.createNewFarmQuestion
)

CommunityRouter.get('/questions/:id', CommunityController.findFarmQuestions)
CommunityRouter.delete('/questions/:id', CommunityController.deleteFarmQuestion)

CommunityRouter.post(
  '/member/application/:id',
  UserGuard(['member']),
  upload.fields([
    { name: 'proof_selfie', maxCount: 1 },
    { name: 'valid_id', maxCount: 1 },
  ]),
  CommunityController.joinCommunityFarm
)

CommunityRouter.get(
  '/member/applications/:id',
  UserGuard(['farm_head']),
  CommunityController.listFarmerApplications
)

CommunityRouter.get(
  '/member/application/view/:id',
  UserGuard(['farm_head']),
  CommunityController.findFarmerApplication
)

CommunityRouter.put(
  '/member/application/update/:id',
  UserGuard(['farm_head']),
  CommunityController.updateApplicationStatus
)

CommunityRouter.delete(
  '/member/application/cancel/:id',
  UserGuard(['member']),
  CommunityController.cancelFarmerApplication
)
