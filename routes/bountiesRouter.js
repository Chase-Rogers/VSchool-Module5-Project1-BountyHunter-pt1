const express = require('express')
const bountiesRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

// Fake Data
const bounties = [
    { firstName: 'Kaith', lastName: 'Rogers', alive: true, reward: 10, type: 'Jedi', _id: uuidv4() },
    { firstName: 'Chase', lastName: 'Rogers', alive: true, reward: 10, type: 'Jedi', _id: uuidv4() },
    { firstName: 'Jeff', lastName: 'Snyder', alive: true, reward: 10, type: 'Sith', _id: uuidv4() },
    { firstName: 'Ron', lastName: 'olshansky', alive: true, reward: 10, type: 'Sith', _id: uuidv4() },
    { firstName: 'Brian', lastName: 'olshansky', alive: true, reward: 10, type: 'Sith', _id: uuidv4() },
    { firstName: 'David', lastName: 'Rogers', alive: true, reward: 10, type: 'Jedi', _id: uuidv4() },
    { firstName: 'David', lastName: 'Rogers(son)', alive: true, reward: 10, type: 'Sith', _id: uuidv4() }
]

// Get all and post
bountiesRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    })

// Get one
bountiesRouter.get('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => {
        return bounty._id === bountyId
    })
    res.send(foundBounty)
})

// Get by type
bountiesRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
})

module.exports = bountiesRouter