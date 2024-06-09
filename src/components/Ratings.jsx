export default function Ratings({handleSubmit, handleSelect, selected}) {
  return (
    <>
      <div className="circle circle_star">
        <img src="/icon-star.svg" alt="image" />
      </div>
      <div className="texts">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>
      </div>
      <ul className="list">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li
            onClick={() => handleSelect(item)}
            className={`flex circle circle_rating btn ${selected === item ? 'orange' : ''}`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="submit">
        SUBMIT
      </button>
    </>
  );
}
