function complex(name, priority, user, title) {
  …
}
complex(
  "Hannes Moser",
  undefined,
  null,
  "Mag.(FH)"
)
// better
complex({
  name: "Hannes Moser",
  title: "Mag.(FH)"
})
