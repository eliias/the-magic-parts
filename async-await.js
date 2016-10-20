const file = await open('hannes.json')
const result = await process(file)
const html = await render(result)

console.log(html)
