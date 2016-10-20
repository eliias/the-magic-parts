const Validation = Sup => class extends Sup {
  validate(schema) {
    …
  }
}

class Person {
  …
}

class Employee extends Validation(Person) {
  …
}
