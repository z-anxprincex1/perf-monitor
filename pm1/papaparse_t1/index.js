const fs = require('fs')
const Papa = require('papaparse')
// const app = express()

const statistics = {
    timestamp: [],
    cpu_usage: [],
    ram_perc: [],
    ram_avail: [],
}

const options = { header: true }

fs.createReadStream("t1.csv")
    .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
    .on("data", (data) => {
        // console.log(data)
        statistics.timestamp.push(data["(PDH-CSV 4.0) (India Standard Time)(-330)"].substring(11, data["(PDH-CSV 4.0) (India Standard Time)(-330)"].length))
        statistics.cpu_usage.push(data["\\\\ZANXX1I9\\Processor Information(0,_Total)\\% Processor Time"])
        statistics.ram_perc.push(data["\\\\ZANXX1I9\\Memory\\% Committed Bytes In Use"])
        statistics.ram_avail.push(data["\\\\ZANXX1I9\\Memory\\Available MBytes"])
    })
    .on("end", () => {
        console.log(statistics)
    })
