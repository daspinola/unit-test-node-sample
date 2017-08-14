const test = require('tape');
const stringUtils = require('./strings.js')

test('lowercase should make everything in the original string lower case', function (t) {
  const result = stringUtils.lowercase('Testing lowerCase')  
  const expected = 'testing lowercase'

  t.ok(result)
  t.deepEqual(result, expected)
  
  t.end()
});

test('if we send a number it should throw an error from lowercase method', function(t) {
  const result = stringUtils.lowercase.bind(null, 1)

  t.throws(result)
  t.end()
})

test('concatenate should return the two strings concatenated', function (t) {
  const result = stringUtils.concatenate('test', 'concat')
  const expected = 'test concat'

  t.deepEqual(result, expected)
  t.end()
});

test('concatenate should consider {} as a string', function (t) {
  const result = stringUtils.concatenate('test', {})
  const expected = 'test {}'

  t.deepEqual(result, expected)
  t.end()
});