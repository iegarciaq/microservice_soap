
const soap = require('soap')
// const wsdlUrl = 'http://www.chemspider.com/MassSpecAPI.asmx?WSDL'
const wsdlUrl = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'

// passing in overridePromiseSuffix because some of the endpoints end
// with "Async" which breaks promisify.
soap.createClientAsync(wsdlUrl, {overridePromiseSuffix: 'Promise'})
  .then(client => {
    console.log(client.ListOfContinentsByName())
    // console.log(client.GetDatabasesPromise().then( data => console.log(data[0].GetDatabasesResult.string) ))
  })

//   soap.createClientAsync(wsdlUrl, {overridePromiseSuffix: 'Promise'})
//   .then(client => {
//     client.GetDatabasesPromise({})
//       .then(results => {
//         // results is an array with only one item which then has an array called "string".
//         const databases = results[0].GetDatabasesResult.string

//         // normally we would do some sort of processing or something.
//         console.dir(databases)
//       })
//   })