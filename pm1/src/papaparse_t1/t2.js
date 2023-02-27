const fs = require("fs")
const Papa = require("papaparse")
const express = require("express")
const app = express()

var directory_string = "../ServerMonitoringData"
const length = fs.readdirSync(directory_string).length
directory_string = `./${directory_string}/${length}/t1.csv`


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
    if (statistics.cpu_usage.length === 0) {
        resolve(ms);
    }
})

async function GetData() {
    fs.createReadStream(directory_string)
    .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
    .on("data", (data) => {
        // console.log(data)
        statistics.timestamp.push(data["(PDH-CSV 4.0) (India Standard Time)(-330)"].slice(statistics.timestamp.length, data["(PDH-CSV 4.0) (India Standard Time)(-330)"].length).substring(11, data["(PDH-CSV 4.0) (India Standard Time)(-330)"].length))
        statistics.cpu_usage.push(data["\\\\Z_ANXX1_HPPAVX1\\Processor Information(_Total)\\% Processor Time"].slice(statistics.cpu_usage.length, data["\\\\Z_ANXX1_HPPAVX1\\Processor Information(_Total)\\% Processor Time"].length))
        statistics.ram_perc.push(data["\\\\Z_ANXX1_HPPAVX1\\Memory\\% Committed Bytes In Use"].slice(statistics.ram_perc.length, data["\\\\Z_ANXX1_HPPAVX1\\Memory\\% Committed Bytes In Use"].length))
        statistics.ram_avail.push(data["\\\\Z_ANXX1_HPPAVX1\\Memory\\Available MBytes"].slice(statistics.ram_avail.length, data["\\\\Z_ANXX1_HPPAVX1\\Memory\\Available MBytes"].length))
    })
    .on("end", () => {
        console.log(statistics)
    })

    app.get('/getData', (req, res) => {
        res.end(JSON.stringify(statistics))
    })

    await GetPromisedData(1000)
}

GetPromisedData
    .then((ms)=>{
        setTimeout(GetData, ms)
    })
    .catch((err) => {console.log(err)})
