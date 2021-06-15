import { getBalance } from "./rpcCalls.js"
import sendNotification from "./sendNotification.js"

const checkBalance = async (url) => {

    const balance = await getBalance(url)

    console.log("Current Balance: " + balance)

    if (parseInt(balance) < 0.01) {
        console.log("Insufficient funds for Proof of Existence. Please buy more Dois to continue writing to Blockchain.")
        throw new Error("Insufficient funds");
    }
    else if (parseInt(balance) < 20) {
        await sendNotification(balance);
    }

}

export default checkBalance