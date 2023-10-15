import { Insertable, Selectable, Updateable } from 'kysely'
import { Forums, Users } from 'kysely-codegen'

export type User = Selectable<Users>
export type NewUser = Insertable<User>
export type UpdateUser = Updateable<User>

export type Question = Selectable<Forums>
export type NewQuestion = Insertable<Forums>
export type UpdateQuestion = Updateable<Forums>
