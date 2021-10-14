export interface IEvents {

    id: string,
    nameSession: string,
    date: string,
    time: string,
    description: string,
    location: { address: string, city: string },
    sessions : [{author : string, nameSession : string}]

}
