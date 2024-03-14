function converttoArray <T>(input: T): T[]   {
    return [input]
}
const first = converttoArray<string>('abass'); 
const second = converttoArray(0)