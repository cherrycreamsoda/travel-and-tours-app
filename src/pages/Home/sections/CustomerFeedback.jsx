import { useState } from 'react';
import testimonialsData from '../../../data/testimonials';
import './CustomerFeedback.css';

function CustomerFeedback() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [feedback, setFeedback] = useState({
    feedback: '',
    firstName: '',
    lastName: '',
    email: '',
    rating: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFeedback((currentFeedback) => ({
      ...currentFeedback,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTestimonials((currentTestimonials) => [
      ...currentTestimonials,
      feedback,
    ]);
    console.log('Customer feedback:', feedback);
  }

  return (
    <section className="customerFeedbackSection">
      <h2>Customer feedback</h2>
      <form className="customerFeedbackForm" onSubmit={handleSubmit}>
        <label>
          Feedback
          <textarea
            name="feedback"
            value={feedback.feedback}
            onChange={handleChange}
          />
        </label>
        <label>
          First name
          <input
            name="firstName"
            type="text"
            value={feedback.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            type="text"
            value={feedback.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={feedback.email}
            onChange={handleChange}
          />
        </label>
        <div className="feedbackRating">
          <span>Stars rating</span>
          <div className="ratingStars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                className={star <= feedback.rating ? 'selectedStar' : ''}
                key={star}
                onClick={() =>
                  setFeedback((currentFeedback) => ({
                    ...currentFeedback,
                    rating: star,
                  }))
                }
                type="button"
              >
                {star}
              </button>
            ))}
          </div>
        </div>
        <button className="reviewButton" type="submit">
          Review
        </button>
      </form>
      <div className="testimonials">
        <h3>Testimonials</h3>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonialCard" key={`${testimonial.email}-${index}`}>
              <p>{testimonial.feedback}</p>
              <h4 className="testimonialName">
                {testimonial.firstName} {testimonial.lastName}
              </h4>
              <div className="testimonialRating">
                {'★'.repeat(Number(testimonial.rating))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
