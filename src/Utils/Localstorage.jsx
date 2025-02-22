const books = [
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      quotes: [
        { id: 1, text: "You gave me a forever within the numbered days." },
        { id: 2, text: "Some infinities are bigger than other infinities." },
        { id: 3, text: "Pain demands to be felt." },
        { id: 4, text: "The marks humans leave are too often scars." },
        { id: 5, text: "Maybe 'okay' will be our always." }
      ]
    },
    {
      title: "A Walk to Remember",
      author: "Nicholas Sparks",
      quotes: [
        { id: 6, text: "Love is like the wind, you can't see it but you can feel it." },
        { id: 7, text: "Without suffering, there'd be no compassion." },
        { id: 8, text: "It wasn’t that we had so much in common; it was that we had so much that was different." },
        { id: 9, text: "There’s no shame in being afraid. What matters is how we face it." },
        { id: 10, text: "Her love is like the wind. I can’t see it, but I can feel it." }
      ]
    }
  ];
  
  
  export const setLocalStorage = () => {
    localStorage.setItem("books", JSON.stringify(books));
  };
  
 
  export const getLocalStorage = () => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  };
  