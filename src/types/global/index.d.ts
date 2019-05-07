declare namespace jest {
  interface Matchers<R> {
    toMatchScreenshots(): R
  }
}

declare namespace NodeJS {
  interface Global {
    expect: jest.Expect
  }
}
