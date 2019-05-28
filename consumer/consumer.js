const book = require('./book')

if(!process.argv[2]) {
  console.log("Missing parameter\n\nUsage: node consumer <book idx>\n")
  process.exit(1)
}

book.get(process.argv[2]).then(response => {
  // console.log(JSON.stringify(response, null, 2))

  console.log(`El libro ${response.title} fue escrito por ${response.author} en ${response.year}`)

})
