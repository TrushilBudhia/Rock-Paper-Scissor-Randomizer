
export const GENERATE_RANDOMNUMBER = 'GENERATE_RANDOMNUMBER'

export function generateRandomNumber() {
  const RandomNumber = Math.floor(Math.random() * 3) 
  const GetGameResult = RandomNumber => {
	const outcomes = ['Rock', 'Paper', 'Scissor']
	return outcomes[ RandomNumber]		
  }	  
  
  const result = GetGameResult(RandomNumber)

  return {
	  type:  GENERATE_RANDOMNUMBER,
	  number: result
  }

  
}


