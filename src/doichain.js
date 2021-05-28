import axios from 'axios';


export const NAMESPACE = 'bp/';
export const NAMESPACE_VERIFIED_EMAIL = 'es/';
export const DOI_FEE = '0.03';


export async function nameDoi(client, name, value, address) {
  const ourName = checkId(name).toString();
  const ourValue = value.toString();
  const parameters = [ourName, ourValue]
  const credentials = client.user + ':' + client.pass
  const url = 'http://' + credentials + '@' + client.host + ':' + client.port

  try {
    const response = await axios.post(
      url,
      {
        id: 'curltest',
        method: 'name_doi',
        params: parameters,
      }
    );
    console.log("txid: ", response.data)
  } catch (error) {
    console.error('\n' + error.response.data);
  }
}


    /**
     * 1. checks if an id starts with doi: if yes it will be removed
     * 2. checks if an id doesn't start with e/ (DOI-permission) and not with es/ (Email signature) and optionaly putting a e/ as default
     */
    function checkId(id) {
        const DOI_PREFIX = "doi: ";
        let ret_val = id; //default value
        if (id.startsWith(DOI_PREFIX)) ret_val = id.substring(DOI_PREFIX.length); //in case it starts with doi: cut  this away
        if (!id.startsWith(NAMESPACE) && !id.startsWith(NAMESPACE_VERIFIED_EMAIL)) ret_val = NAMESPACE + id; //in case it doesn't start with e/ put it in front now.
        return ret_val;
    }
