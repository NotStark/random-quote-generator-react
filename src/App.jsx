import { useState, useRef, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const quoteRef = useRef(null);
  const quoterRef = useRef(null);

  useEffect(() => {
    getRandomQuotes();
  }, []); 

  const getRandomQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((jsonRes) => setQuotes(jsonRes))
      .catch((error) => console.error('Error fetching quotes:', error));
  };

  const changeQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    if (randomQuote) {
      quoteRef.current.textContent = randomQuote.text;
      quoterRef.current.textContent = randomQuote.author;
    }
  };

  return (
    <div className="wrapper">
      <span>
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 161 141"
          fill="#F583A7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M145.91 70.5H120.753V50.3571C120.753 39.2471 129.778 30.2143 140.878 30.2143H143.394C147.576 30.2143 150.941 26.8467 150.941 22.6607V7.55357C150.941 3.36763 147.576 0 143.394 0H140.878C113.081 0 90.5658 22.5348 90.5658 50.3571V125.893C90.5658 134.233 97.3265 141 105.66 141H145.91C154.243 141 161.003 134.233 161.003 125.893V85.6071C161.003 77.2667 154.243 70.5 145.91 70.5ZM55.347 70.5H30.1908V50.3571C30.1908 39.2471 39.2156 30.2143 50.3158 30.2143H52.8314C57.0136 30.2143 60.3783 26.8467 60.3783 22.6607V7.55357C60.3783 3.36763 57.0136 0 52.8314 0H50.3158C22.5181 0 0.0032959 22.5348 0.0032959 50.3571V125.893C0.0032959 134.233 6.76404 141 15.097 141H55.347C63.6801 141 70.4408 134.233 70.4408 125.893V85.6071C70.4408 77.2667 63.6801 70.5 55.347 70.5Z"
          />
        </svg>
      </span>
      <div className="quote">
        <h6>
          <em ref={quoteRef}>
            It is only with the heart that one can see rightly, what is essential is invisible to the eye.
          </em>
        </h6>
        <div className="line"></div>
        <h4 ref={quoterRef}>Antoine de Saint-Exupery</h4>
      </div>
      <div className="bottom">
        <span>
          <svg
            width="inherit"
            height="inherit"
            viewBox="0 0 69 69"
            fill="#364BA7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.6071 0H7.39286C3.31138 0 0 3.31138 0 7.39286V61.6071C0 65.6886 3.31138 69 7.39286 69H61.6071C65.6886 69 69 65.6886 69 61.6071V7.39286C69 3.31138 65.6886 0 61.6071 0ZM54.0757 24.458C54.1065 24.8893 54.1065 25.3359 54.1065 25.7672C54.1065 39.1205 43.9413 54.5069 25.3667 54.5069C19.6373 54.5069 14.3237 52.8435 9.85714 49.9788C10.6734 50.0712 11.4589 50.102 12.2906 50.102C17.019 50.102 21.3623 48.5002 24.8277 45.7895C20.392 45.6971 16.6647 42.7862 15.3864 38.7817C16.942 39.0127 18.3435 39.0127 19.9453 38.5969C15.3248 37.6574 11.8594 33.5913 11.8594 28.6781V28.5549C13.1993 29.3096 14.7703 29.7717 16.4183 29.8333C15.0328 28.9117 13.897 27.6614 13.1123 26.1941C12.3275 24.7267 11.9183 23.0879 11.921 21.4239C11.921 19.5449 12.4138 17.8199 13.2917 16.3259C18.2665 22.4558 25.7364 26.4603 34.115 26.8915C32.6826 20.0377 37.8114 14.4777 43.9721 14.4777C46.883 14.4777 49.5013 15.6944 51.3496 17.6658C53.629 17.2346 55.8161 16.3875 57.7567 15.2324C57.002 17.5734 55.4156 19.5449 53.321 20.7924C55.354 20.5768 57.3254 20.0069 59.1429 19.2214C57.7721 21.2391 56.0471 23.0257 54.0757 24.458Z"
            />
          </svg>
        </span>
        <button onClick={changeQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
