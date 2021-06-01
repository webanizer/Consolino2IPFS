import IPFSRepo from "ipfs-repo"
import clean from "./clean.js"
import os  from 'os'
import path from 'path'
import { nanoid } from "nanoid"

const tempRepo = function createTempRepo (repoPath) {
  repoPath = repoPath || path.join(os.tmpdir(), '/ipfs-test-' + nanoid())  

  const repo = new IPFSRepo(repoPath)  

  repo.teardown = async () => {       

    try {
      await repo.close()      

    } catch (err) {
      if (!err.message.includes('already closed')) {
        throw err
      }
    }

    await clean(repoPath)
  }  

  return repo
}
export default tempRepo
