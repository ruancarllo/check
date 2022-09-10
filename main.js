const correctReciever = document.querySelector('.reciever:is(#correct)')
const givenReciever = document.querySelector('.reciever:is(#given)')
const proccessButton = document.querySelector('.proccess')
const resultsList = document.querySelector('.results')

function getNotes(text) {
    let upperText = text.toUpperCase()
    let notesArray = upperText.split('')
    return notesArray
}

function createResult(number, corrcetAnswer, givenAnswer) {
    let questionBox = Object.assign(document.createElement('div'), {
        className: 'question-box',
        textContent: number
    })

    questionBox.id = corrcetAnswer === givenAnswer ? "correct" : "wrong"
    return questionBox
}

function showResults() {
    resultsList.innerHTML = null
    let correctNotes = getNotes(correctReciever.value)
    let givenNotes = getNotes(givenReciever.value)

    if (correctNotes.length !== givenNotes.length) {
        return alert('Há um erro nas informações fornecidas!')
    }

    for (let n = 0; n < givenNotes.length; n++) {
        let questionBox = createResult(n + 1, correctNotes[n], givenNotes[n])
        resultsList.append(questionBox)
    }
}

proccessButton.addEventListener('click', showResults)