const node = {
  value: '1',
  children: [
    { value: '2', children: [{ value: '4' }] },
    { value: '3', children: [{ value: '5' }] }
  ]
}

// dfs = ['1', '2', '4', '3', '5']
// bfs = ['1', '2', '3', '4', '5']

// dfs递归版
function dfs(node) {
  const nodes = []
  if (node) {
    nodes.push(node.value)
    const children = node.children
    if (children && children.length > 0) {
      children.forEach((item) => {
        nodes.push(...dfs(item))
      })
    }
  }
  return nodes
}

// dfs非递归版
function dfs2(node) {
  const nodes = []
  const stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      const { value, children } = stack.shift()
      nodes.push(value)
      if (children && children.length) {
        stack.unshift(...children)
      }
    }
  }
  return nodes
}

// bfs非递归版
function bfs(node) {
  const nodes = []
  const stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      const { value, children } = stack.shift()
      nodes.push(value)
      if (children && children.length) {
        stack.push(...children)
      }
    }
  }
  return nodes
}

console.log(dfs2(node))
