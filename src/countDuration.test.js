import countDuration from './countDuration'

describe('countDuration', () => {
  it('counts the duration between two time stamps', () => {
    const result = countDuration('11:00', '11:30')
    expect(result).toBe(30)
  })

  it('trhows an error if called with strings', () => {
    expect(() => {
      countDuration('first', 'second').toThrow()
    })
  })

  it('throws an error if given timestamp is too long', () => {
    expect(() => {
      countDuration('11:000', '122:00').toThrow()
    })
  })
})
