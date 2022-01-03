# you can define a type like the follwing

type User{
    id: ID!
    age: Int!
    friends:[User]
    videosPosted:[Video]
}

type Video{
    id:ID!
    title:String!
    description: String!
}