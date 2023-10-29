import { NewQuestion } from '../../types/DBTypes'
import dbErrorHandler from '../../utils/dbErrorHandler'
import * as Service from './ForumsService'

export async function createNewQuestion(question: NewQuestion) {
  const newQuestion = await Service.createQuestion(question)

  return newQuestion
}
