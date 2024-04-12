// code your solution here
superbowlWin = (record) => {
    // Find the first record with a result of "W" (indicating a win)
    const result = record.find( record => record.result === "W" );
    
    // If a win record is found, return the year of the win
    return !!result ? result.year : undefined;
  }