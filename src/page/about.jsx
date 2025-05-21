function About() {
    return (
    <div className="teal lighten-4" style={{ minHeight: '80vh', marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <div style={{ height: '30px' }}></div>
        <h2 className="center-align teal-text text-darken-2">
          <i className="fas fa-utensils teal-text text-darken-2"></i> Who We Are
        </h2>

        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card teal lighten-5 z-depth-2">
              <div className="card-content">
                <span className="card-title teal-text text-darken-2">
                  <i className="fas fa-seedling teal-text text-darken-2"></i> Our Vision
                </span>
                <p className="flow-text">
                  At GreenBite, we believe cooking is more than food — it's joy, creativity, and connection.
                  Since 2024, we've aimed to inspire with vibrant, easy-to-make dishes crafted for modern life.
                </p>
                <p className="flow-text">
                  Whether you're a seasoned chef or just starting out, GreenBite brings fresh flavors and community to your kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default About;
