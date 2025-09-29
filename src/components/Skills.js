import React from 'react'

function Skills() {
  return (
    <div>
      <section id="skills" class="py-5 bg-body-tertiary">
        <div class="container">
            <h2 class="text-center mb-5">My Skills</h2>
            <div class="row g-4 justify-content-center">
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">Soft Skills</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Communication skills</li>
                                <li class="list-group-item">Problem solving skills</li>
                                <li class="list-group-item">Quick learner and decision making</li>
                                <li class="list-group-item">Responsible and Multi-tasking</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">Technical Skills</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Python</li>
                                <li class="list-group-item">SQL</li>
                                <li class="list-group-item">Web Development</li>
                                <li class="list-group-item">Data Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills
