import { api } from "@/services/api"

export default async function FunctionfetchLogo () {
    let result 

    try {
        const response = await api.get('/logo')
        // console.log(response.data)
        if(response.data && response.data.length > 0){
            result = response.data[0]
        }
    } catch (error) {
        console.log(error)
    }

    return result
}

