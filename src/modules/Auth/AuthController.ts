import { Request, Response } from 'express'
import errorHandler from '../../utils/httpErrorHandler'
import * as Interactor from './AuthInteractor'
import * as Schema from '../../schema/AuthSchema'
import zParse from '../../utils/zParse'
import { SessionRequest } from '../../types/AuthType'

export async function authenticateUser(req: SessionRequest, res: Response) {
  try {
    const credentials = await zParse(Schema.UserAuthSchema, req)
    const { email, password } = credentials.body
    const auth = await Interactor.authenticateUser(email, password)
    req.session.userid = auth.id
    res.status(200).json({ message: 'User Authenticated', user: auth })
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function registerUser(req: SessionRequest, res: Response) {
  try {
    const newUser = await zParse(Schema.UserRegisterSchema, req)
    const user = await Interactor.registerUser(newUser)
    req.session.userid = user.id
    res.status(201).json({ message: 'Registered Successfully', user })
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function getCurrentUser(req: SessionRequest, res: Response) {
  try {
    const session = req.session.userid
    const user = await Interactor.getCurrentUser(session)
    res.status(200).json(user)
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function sendEmailVerification(
  req: SessionRequest,
  res: Response
) {
  try {
    const session = req.session.userid
    await Interactor.sendEmailVerification(session)
    res.status(200).json({ message: 'Sent Successfully' })
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function verifyAccountLevelOne(req: Request, res: Response) {
  try {
    const token = await zParse(Schema.verifyLevelOne, req)
    // add data const here to pass in socket.io later
    await Interactor.verifyAccountLevelOne(token.params.id)

    res.status(200).json({ message: 'Verified Successfully' })
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function verifyAccountLevelTwo(
  req: SessionRequest,
  res: Response
) {
  try {
    const id = req.session.userid
    const userInfo = await zParse(Schema.verifyLevelTwo, req)

    const updatedUser = await Interactor.verifyAccountLevelTwo(id, userInfo)

    res
      .status(200)
      .json({ message: 'Verified Successfully', user: updatedUser })
  } catch (error) {
    errorHandler(res, error)
  }
}
