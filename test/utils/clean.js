'use strict'

import rimraf from'rimraf'
import fs from "fs/promises"
import { promisify } from'util'

const dir = async dir => {
  try {
    await fs.access(dir)
  } catch (err) {
    // Does not exist so all good
    return
  }

  return promisify(rimraf)(dir)
}

export default dir
