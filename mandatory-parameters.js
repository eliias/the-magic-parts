function mandatory() {
  throw new Error("Missing parameter")
}

function foo(a = mandatory()) {
  …
}

foo()
