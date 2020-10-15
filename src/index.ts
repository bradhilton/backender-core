export type AnyModel = {
  id: string
  fields: {
    [fieldName: string]: {
      id: string
    }
  }
}

export type BaseRequest = {
  backendId: string
  clientId: string
}

export type Query<Model extends AnyModel> = BaseRequest & {
  type: 'query'
  model: Model
}

export type Create<Model extends AnyModel> = BaseRequest & {
  type: 'create'
  model: Model
  data: Partial<Omit<{ [fieldName in keyof Model['fields']]: unknown }, 'id'>>
}

export type Update<Model extends AnyModel> = BaseRequest & {
  type: 'update'
  model: Model
  data: Partial<{ [fieldName in keyof Model['fields']]: unknown }> & {
    id: string
  }
}

export type Delete<Model extends AnyModel> = BaseRequest & {
  type: 'delete'
  model: Model
  id: string
}

export type Request<Model extends AnyModel> =
  | Query<Model>
  | Create<Model>
  | Update<Model>
  | Delete<Model>
