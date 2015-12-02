# Afloop #

An animation frame loop. Pronounced "af-loop". This function will be run once every frame, and is passed the delta between each frame, given in seconds.

    var loop = new Afloop(function(delta) {
        console.log(delta)
    })
