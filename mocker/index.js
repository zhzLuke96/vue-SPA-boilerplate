const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    [`GET /api/users`]: (req, res) => {
        console.log('mocker request ---->', req.params);
        return delay(1000).then(
            () => res.json(["John", "Fred", "William", "Whitney"])
        )
    }
}