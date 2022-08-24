import { Result } from 'App/Shared/Result'
import { BaseUseCase } from './BaseUseCase'

interface YourModel {
  name: string
}

// filters contract
interface ProductSearch {
  name?: string
  age?: number
  location?: string
  range?: number
}

/**
 * This is an example how we can handle in a clean wait a searching.
 * We can
 */
export default class SearchProduct implements BaseUseCase<ProductSearch, Result<YourModel[]>> {
  constructor(protected someRepo: string) {}

  public async execute(qs: ProductSearch): Promise<Result<YourModel[]>> {
    return Result.ok<YourModel[]>([{ name: 'test' }])
  }
}
