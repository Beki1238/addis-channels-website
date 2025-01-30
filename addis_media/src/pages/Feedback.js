import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted!');
    setFeedback('');
  };

  return (
    <section className="newsletter">
      <h2 className="heading">Send Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          required
        />
        <button type="submit" className="btn">Submit Feedback</button>
      </form>
    </section>
  );
};

export default Feedback;