
export const GENERATE_RANDOMNUMBER = 'GENERATE_RANDOMNUMBER'
export function generateRandomNumber() {
  const RandomNumber = Math.floor(Math.random() * 3) + 1
  let result = "-";
	 
  if (RandomNumber === 1) {
    result = "Rock";
  };

  if (RandomNumber === 2) {
    result = "Paper";
  };
  
  if (RandomNumber === 3) {
    result = "Scissor";
  };

  return {
	  type:  GENERATE_RANDOMNUMBER,
	  number: result
  }

  
}


