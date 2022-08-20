export interface BaseUseCase<Params, Result> {
  execute(params: Params): Promise<Result>
}
