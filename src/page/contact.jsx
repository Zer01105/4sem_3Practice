function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted');
    };

    return (
    <div className="teal lighten-4" style={{ minHeight: '80vh', padding: '20px 0', marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <h2 className="center-align teal-text text-darken-2">
          <i className="material-icons">contact_mail</i> Get in Touch
        </h2>
        <p className="flow-text center-align">
          Got a recipe suggestion or feedback? Reach out — we’re all ears!
        </p>

        <div className="row">
          <div className="col s12 m6">
            <div className="card teal lighten-5">
              <div className="card-content">
                <span className="card-title teal-text text-darken-2">Reach Us At</span>
                <p>
                  <i className="material-icons teal-text text-darken-2">email</i> hello@greenbite.com
                </p>
                <p>
                  <i className="material-icons teal-text text-darken-2">phone</i> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <form onSubmit={handleSubmit} className="card-panel">
              <div className="input-field">
                <input id="name" type="text" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="input-field">
                <input id="email" type="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <textarea id="message" className="materialize-textarea" required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="btn teal darken-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Contact;
