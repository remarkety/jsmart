define(['jSmart'], function (jSmart) {
  describe('Test Syntax', function () {
    it('test variable', function () {
      var t = new jSmart('Hello')
      t.registerFilter('post', function (o) {
        return o + '1'
      })
      var t2 = new jSmart('Hello')
      t2.registerFilter('post', function (o) {
        return o + '2'
      })
      expect(t.fetch()).toBe('Hello1')
      expect(t2.fetch()).toBe('Hello2')
    })
  })
})
