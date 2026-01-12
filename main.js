import { createFlashCards } from "./src/create_flash_cards.js";
import { displayHistory } from "./src/history.js";
import { studyFlashCards } from "./src/study_flash_card.js";

const displayOptions = () => {
  console.log('\t 1 : TO CREATE FLASH CARDS\n');
  console.log('\t 2 : TO STUDY FLASH CARDS\n');
  console.log('\t 3 : TO SEE HISTORY\n');
}

const changeMode = (mode) => {
  const modes = {
    1 : () => createFlashCards(),
    2 : () => studyFlashCards(),
    3 : () => displayHistory()
  }

  try { 
    modes[mode]();
   } catch { console.clear();
    console.log('Invalid Option');
  }
}

const main = () => {
  
  while (true) {
    displayOptions();
    const choice = prompt('');
    changeMode(choice);
  }
};

main()