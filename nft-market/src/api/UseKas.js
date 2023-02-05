import axios from "axios";
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY, COUNT_CONTRACT_ADDRESS,NFT_CONTRACT_ADDRESS,CHAIN_ID} from'../constants';

const option = {
    headers: {
        Authorization:"Basic "+ Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCESS_KEY).toString("base64"),
        "x-chain-id": CHAIN_ID,
        "content-type": "application/json",
    }
}


export const uploadMetadata = async (company,position, desc,start, end, imageUrl) => {
        const metadata = {
            metadata: {
                company: company,
                position: position,
                description:desc,
                startDate:start,
                endDate: end,
                image: imageUrl
            }
        }
        try{
            const response = await axios.post("https://metadata-api.klaytnapi.com/v1/metadata",metadata, option);
            console.log(`${JSON.stringify(response.data)}`);
            console.log(`Response.data.uri:${response.data.uri}`)
            return response.data.uri
        }catch(e){
            console.log(`Error message :${e}`)
            return false
        }

}


export const uploadAssetData = async (file) => {
    const fileData = {
            file:file
    }
    try {
        const response = await axios.post("https://metadata-api.klaytnapi.com/v1/metadata/asset",fileData)
        console.log(`${JSON.stringify(response.data)}`);
        console.log(`Response.data.uri:${response.data.uri}`)
        return response.data.url
    }catch(e){
        console.log(`Error message :${e}`)
        return false
    }

}