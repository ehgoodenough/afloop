# Afloop #

An animation frame loop. Pronounced "af-loop". Given a function, it will loop it each and every frame. The function is passed the time between each frame, given in milliseconds, and capped at a second.

```js
var loop = new Afloop(function(delta) {
    console.log(delta)
})
```
