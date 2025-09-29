import React from 'react'

function Grades() {
  return (
    <div>
           <div id="grades" class="mb-4">
            <h2 class="mb-3">Subjects & Grades</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML</td>
                            <td>95</td>
                            <td>A+</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>88</td>
                            <td>B+</td>
                        </tr>
                        <tr>
                            <td colspan="2">Javascript</td>
                            <td>B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Grades
