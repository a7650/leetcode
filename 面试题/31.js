var validateStackSequences = function (pushed, popped) {
  const stack = []
  let n = pushed.length
  let i = 0
  let point = 0
  while (i < n) {
    stack.push(pushed[i])
    while (stack.length > 0 && stack[stack.length - 1] === popped[point]) {
      stack.pop()
      point++
      // console.log(stack, point)
    }
    i++
  }
  return point === n
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
