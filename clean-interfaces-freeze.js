export default function pokemon() {
  function collect() {
    …
  }
  return Object.freeze({collect})
}

const pikachu = pokemon()
pikachu.bad = function() {
  …
}
// throws TypeError or fails silently
