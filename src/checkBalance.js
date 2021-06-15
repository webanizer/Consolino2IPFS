import { getBalance } from "./rpcCalls.js"
import sendNotification from "./sendNotification.js"

const checkBalance = async (url) => {

    const balance = await getBalance(url)

    console.log("Current Balance: "+ balance)

    if (parseInt(balance) < 100){
        await sendNotification(balance);
    }


}

export default checkBalance