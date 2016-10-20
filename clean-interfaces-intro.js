export default function pokemon() {
  function collect() {
    …
  }
  return {collect}
}

const pikachu = pokemon()
pikachu.bad = function() {
  …
}
// no problem at all
