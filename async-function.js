function open(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })
}
