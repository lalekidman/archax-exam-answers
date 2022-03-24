class Employee {
  public async fetchAllRecords () {
    return [1, 2, 3]
  }
}

describe('@Employee', () => {
  const employee = new Employee()
    it('should return Promise<number[]>', async () => {
      try {
        const numbers = await employee.fetchAllRecords()
        expect(numbers).toBeArray()
        expect(numbers.length).toEqual(3)
        expect(numbers.includes(1)).toBeTrue()
        expect(numbers.includes(2)).toBeTrue(3)
        expect(numbers.includes(3)).toBeTrue(3)
      } catch (error) {
        // or validate the error.message
        expect(true).toBeFalse()
      }
    })
})