const express = require('express')
const app = express()
const PORT = 6969
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas/Queries')


//route
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);

app.listen(PORT, () => {
    console.log("server is running");
})




