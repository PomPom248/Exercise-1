const express = require('express');
const messageRouter = express.Router();
const axios = require('axios')

const axiosRoute = axios.create({
    baseURL: "http://exercise-1_messageapp_1:3000"
})

messageRouter.post('/messages', (req, res, next) => {
    const { destination, body } = req.body
    sendMessage(destination, body, res)
})

sendMessage = (destination, body, res) => {
    return axiosRoute.post("/message", { destination, body })
        .then((response) => {
            console.log(response)
            res.status(200).json({ message: 'Message created' })
        })
        .catch((err) => {
            console.log(err)
            res.status(500)
        })
}

// messageRouter.get('/', (req, res, next) => {
//     return axiosRoute.get(baseURL)
//         .then(() => {
//             res.status(200).json()
//         })
//         .catch((err) => {
//             res.status(500).json(err)
//         })
// })

module.exports = messageRouter;