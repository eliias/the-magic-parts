const file = open('hannes.json')
const result = process(file)
const html = render(result)

html
  .then(str => console.log(str))
  .catch(err => console.error(err.message))
