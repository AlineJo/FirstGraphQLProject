const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList } = graphql


const UserType = require("../Types/UserType")

//https://www.mockaroo.com/
const userData = require('../MOCK_DATA.json')


// fields :  all queries we will use
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {},
            resolve(parent, args) {//you can write the select query here!
                return userData
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                ip_address: { type: GraphQLString }
            },
            resolve(parent, args) {//you can write the insert query here!
                userData.push({
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    gender: args.gender,
                    ip_address: args.ip_address
                })

                return args
            }
        }
    }
})



// schema = query(get-info) + mutation(Create, Update, Delete)  
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

module.exports = schema
