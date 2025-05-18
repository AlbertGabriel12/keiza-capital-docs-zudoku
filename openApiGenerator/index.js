const { writeFileSync } = require("fs")
const docs = require("./docs")

const PATH = "./apis/openapi.json"

writeFileSync(PATH, JSON.stringify(docs, null, 2), (error) => {
    console.log(error)
})
console.log("OpenAPI documentation created ✅")