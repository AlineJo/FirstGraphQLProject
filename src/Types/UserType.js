const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLInputObjectType, GraphQLList } = graphql





// UserType Almost like creating a model class
/*
    {
        "id": 1,
        "first_name": "Torrance",
        "last_name": "Keyes",
        "email": "tkeyes0@sfgate.com",
        "gender": "Bigender",
        "ip_address": "112.140.81.236"
    },
*/
const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString }
    })
})

module.exports = UserType