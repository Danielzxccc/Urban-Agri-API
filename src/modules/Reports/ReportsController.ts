import { Response } from 'express'
import { SessionRequest } from '../../types/AuthType'
import errorHandler from '../../utils/httpErrorHandler'
import * as Interactor from './ReportsInteractor'
import * as Schema from '../../schema/ReportsSchema'
import zParse from '../../utils/zParse'
import { ZodError } from 'zod'
import { deleteFile } from '../../utils/file'

export async function createCommunityCropReport(
  req: SessionRequest,
  res: Response
) {
  try {
    const { userid } = req.session
    const { body } = await zParse(Schema.NewCommunityCropReport, req)
    const images = req.files as Express.Multer.File[]

    const newReport = await Interactor.createCommunityCropReport(
      userid,
      body,
      images
    )

    res
      .status(201)
      .json({ message: 'Report successfully submitted.', data: newReport })
  } catch (error) {
    if (error instanceof ZodError) {
      for (const image of req.files as Express.Multer.File[]) {
        deleteFile(image.filename)
      }
    }
    errorHandler(res, error)
  }
}
