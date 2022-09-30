import { Optional } from './Optional'

interface ResultProps<T> {
  isSuccess: boolean
  value?: T
  error?: T | string
}

export class Result<T> {
  public isSuccess: boolean
  public isFailure: boolean
  public error?: T | string
  private value?: T

  constructor(props: ResultProps<T>) {
    this.isSuccess = props.isSuccess
    this.isFailure = !props.isSuccess
    this.value = props.value
    this.error = props.error
  }

  public getValue(): Optional<T> {
    if (!this.isSuccess) {
      throw new Error("Can't get the value of an error result. Use 'errorValue' instead.")
    }
    return this.value
  }

  public errorValue(): T {
    return this.error as T
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>({ isSuccess: true, value })
  }

  public static fail<U>(error: any): Result<U> {
    return new Result<U>({ isSuccess: false, error })
  }
}
