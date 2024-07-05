
function Contact(){
return (
    <div className="contact-page">
    <div className="top-tip-container">
      <article className="top-tip-tip">
        <img src="images/Water.png" alt="image of water bottle" />
        <p>One of the easiest things you can do to improve your health is to drink more water. A lot of health benefits can come from drinking more water. If you don't drink enough, start by increasing your water consumption to 2-3 litres a day if you haven't already.</p>
      </article>
      <article className="top-tip-tip">
        <img src="images/Fruit.png" alt="image of a random assortment of food items" />
        <p>Another way to improve your health is by improving your diet. We would recommend finding a way of eating that suits your lifestyle. This could be calorie counting, intermittent fasting, or just lowering sugar consumption. The possibilities and combinations are endless, so just find something that works for you and your lifestyle.</p>
      </article>
      <article className="top-tip-tip">
        <img src="images/workout.png" alt="workout" />
        <p>Working out consistently can have major positive health impacts. It can help regulate your mood, help you lose weight, or just improve your general health. The key is to find a way to be consistent and to work around your lifestyle to make that process easier. Remember to start small and build a good habit. Something sustainable and not too overbearing is a good place to start.</p>
      </article>
    </div>
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)
}
export default Contact