import { useState } from 'react';
import testimonialsData from '../../../data/testimonials';
import './CustomerFeedback.css';

function getTimeAgo(createdAt) {
  const elapsedSeconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(createdAt).getTime()) / 1000),
  );

  if (elapsedSeconds < 60) return 'Just now';

  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  if (elapsedMinutes < 60) return `${elapsedMinutes} minutes ago`;

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return `${elapsedHours} hours ago`;

  const elapsedDays = Math.floor(elapsedHours / 24);
  if (elapsedDays < 30) return `${elapsedDays} days ago`;

  const elapsedMonths = Math.floor(elapsedDays / 30);
  if (elapsedMonths < 12) return `${elapsedMonths} months ago`;

  return `${Math.floor(elapsedMonths / 12)} years ago`;
}

function CustomerFeedback() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [feedbackError, setFeedbackError] = useState('');
  const [feedback, setFeedback] = useState({
    feedback: '',
    firstName: '',
    lastName: '',
    email: '',
    rating: 0,
    createdAt: '',
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
    if (!feedback.feedback.trim() || !feedback.firstName.trim() || !feedback.lastName.trim() || !feedback.email.trim() || !feedback.rating) {
      setFeedbackError('Please complete every field and choose a star rating.');
      return;
    }

    const submittedFeedback = {
      ...feedback,
      createdAt: new Date().toISOString(),
    };

    setTestimonials((currentTestimonials) => [
      ...currentTestimonials,
      submittedFeedback,
    ]);
    console.log('Customer feedback:', submittedFeedback);
    setFeedbackError('');
  }

  return (
    <section className="customerFeedbackSection">
      <h2>Customer feedback</h2>
      <form className="customerFeedbackForm" onSubmit={handleSubmit}>
        <label>
          Feedback
          <textarea
            name="feedback"
            required
            value={feedback.feedback}
            onChange={handleChange}
          />
        </label>
        <label>
          First name
          <input
            name="firstName"
            required
            type="text"
            value={feedback.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            required
            type="text"
            value={feedback.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            required
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
      {feedbackError && (
        <p className="feedbackValidation" role="alert">{feedbackError}</p>
      )}
      <div className="testimonials">
        <h3>Testimonials</h3>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonialCard" key={`${testimonial.email}-${index}`}>
              <p>{testimonial.feedback}</p>
              <h4 className="testimonialName">
                {testimonial.firstName} {testimonial.lastName}
              </h4>
              <time className="testimonialDate" dateTime={testimonial.createdAt}>
                {new Date(testimonial.createdAt).toLocaleDateString()} ·{' '}
                {getTimeAgo(testimonial.createdAt)}
              </time>
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
