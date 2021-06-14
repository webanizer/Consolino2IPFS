import { getBalance } from "./rpcCalls.js"

const checkBalance = async (url) => {

    const balance = await getBalance(url)

    console.log("Current Balance: "+ balance)
}

export default checkBalance