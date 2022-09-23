const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "Track's title"
        title: String!
        "Track's main author"
        author: Author!
        "Track's main illustration to display in track card or track page detail"
        thumbnail: String
        "Track's approximate length to complete, in minutes"
        length: Int
        "Number of modules this track contains"
        modulesCount: Int
    }
    
    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture URL"
        photo: String
    }
`;

module.exports = typeDefs;
