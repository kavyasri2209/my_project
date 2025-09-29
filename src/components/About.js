import React from 'react'

function About() {
  return (
    <div>
       <section id="about" class="py-3 bg-light">
        <div class="container">
            <h2 class="text-center mb-3">About Me</h2>
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-center">
                {/* <img src="https://i.pinimg.com/1200x/ab/40/51/ab40519090e8b087953a1404a2cd4634.jpg" alt="Kavya's profile picture" class="img-fluid rounded-circle shadow-lg mb-4 mb-md-0 me-md-4" style="width: 200px; height: 200px; object-fit: cover;"> */}
                <div class="text-center text-md-start">
                    <p class="mb-0 fs-5">My name is Kavya, and I am a computer science engineering graduate with a passion for coding and technology. I have a strong foundation in programming languages such as **Python** and **SQL**. I enjoy solving complex problems and continuously learning new technologies.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
