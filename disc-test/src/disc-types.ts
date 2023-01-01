type Question = {
    text: string;
    responses: Array<{
      text: string;
      type: 'D' | 'I' | 'S' | 'C';
    }>;
  };
  
  type Results = {
    D: number;
    I: number;
    S: number;
    C: number;
  };