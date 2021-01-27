export class Bpi {
  bpi: { [key: string]: string } = {}
  disclaimer: string = ''
  time: {
    updated: string
    updatedISO: string
  } = { updated: '', updatedISO: '' }

  constructor (obj?: Partial<Bpi>) {
    Object.assign(this, obj)
  }
}
