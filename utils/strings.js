function lowercase(value) {
  try {
    return value.toLowerCase()
  } catch(e) {
    throw e
  }
}

function concatenate(start, end) {
  start = typeof start === 'string' 
    ? start
    : JSON.stringify(start)
  end = typeof end === 'string'
    ? end
    : JSON.stringify(end)

  return `${start} ${end}`
}

module.exports = {
  lowercase,
  concatenate
}
