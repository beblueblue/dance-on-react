function add(...arg) {
  return Array.from(arg).reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

export { add }