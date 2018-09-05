
export const GENERATE_RANDOMNUMBER = 'GENERATE_RANDOMNUMBER'
export function generateRandomNumber() {
  return {
	  type:  GENERATE_RANDOMNUMBER,
	  number: Math.floor(Math.random() * 100) + 1
  }
}


