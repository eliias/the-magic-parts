import parasite from 'parasite'

function pokemon({name} = {}) {
  const super = parasite({name})
  function collect() {
    …
  }
  super.collect = collect
  return
}

const pikachu = pokemon({name: 'Pokemon'})
