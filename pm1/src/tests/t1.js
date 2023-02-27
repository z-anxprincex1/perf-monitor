const name = "Anand"

const NewPromise = new Promise((res, rej) => {
    if (name === "Anand") {
        res();
    } else {
        rej();
    }
})

NewPromise
    .then((res) => {
        console.log(name)
    })
    .catch((res) => {
        console.log("err")
    })
    .finally(() => {
        console.log("the conclusion")
    })