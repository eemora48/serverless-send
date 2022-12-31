function formToApi(event, typeOfSending){
    event.preventDefault()

    var data= {
        typeOfSending: typeOfSending,
        destinationEmail: document.getElementsByName('email')[0].value,
        phoneNumber: document.getElementsByName('sms')[0].value,
        message: document.getElementsByName('message')[0].value
    }

    fetch("https://tarstn0cbb.execute-api.us-east-1.amazonaws.com/sendingStage", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data),
        mode: "no-cors"
    })
}