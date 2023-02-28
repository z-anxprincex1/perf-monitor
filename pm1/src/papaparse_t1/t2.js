// import { data_start as start, data_end as end } from './data_param_size'

const fs = require("fs")
const Papa = require("papaparse")
const express = require("express")
const app = express()

var directory_string = "../ServerMonitoringData"
const length = fs.readdirSync(directory_string).length
// directory_string = `./${directory_string}/${length}/t1.csv`
directory_string  = `./${directory_string}/t1.csv`


const statistics = {
        timestamp: [],
        cpu_usage: [],
        ram_perc: [],
        ram_avail: [],
    }

const options = { header: true }

var server = app.listen(8080, () => {
    var port = server.address().port
    console.log(`listening on port: ${port}`)
    })

const GetPromisedData = (ms) => new Promise((resolve) => {
    setTimeout(GetData(), ms)
})

async function GetData() {
    await fs.createReadStream(directory_string)
    .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
    .on("data", (data) => {
        console.log(data['(PDH-CSV 4.0) (India Standard Time)(-330)'])
    })
    .on("end", () => {
        console.log(statistics)
    })

    app.get('/getData', (req, res) => {
        res.end(JSON.stringify(statistics))
    })

    await GetPromisedData(2000)
}

console.log(`updating from directory: ${directory_string}`)

GetData()