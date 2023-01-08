const btnOn = document.getElementById('btn-on')

btnOn.addEventListener('click', function (e) {
    recognition.start()
    console.log('Ready to receive a color command.')
    console.log(e)
})

// recognition.addEventListener('result', onSpeak)
// function onSpeak(e) {
//     console.log (e.results[0][0].transcript)
    
// }