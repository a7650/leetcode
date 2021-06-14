function t() {
  return 1
}

async function a() {
  const b = await t()
  console.log(b)
}

a().then(() => {
  console.log(3)
})
console.log(2)
