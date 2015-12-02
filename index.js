var raf = require("raf")

function Afloop(func) {
    (function loop(tick) {
        func(Math.min((Date.now() - tick) / 1000, 1000))
        raf(loop.bind(this, Date.now()))
    })(Date.now())
}

module.exports = Afloop
