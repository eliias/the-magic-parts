function pokemon({name} = {}) {
  function collect() {
    …
  }
  return {
    collect
  }
}

const pikachu = pokemon({name: 'Pokemon'})
