import React from 'react'

function Student() {
    const student= [
        {id: 1, name: "a",class: 1},
        {id: 2, name: "b",class: 1},
        {id: 3, name: "b",class: 1},
        {id: 4, name: "b",class: 1},
        {id: 5, name: "b",class: 1},
    ]
  return (
    student.map(stu => 
        <div>
            id: {stu.id} <br />
            name: {stu.name} <br />
            class: {stu.class} <br /><br />
        </div>
    )
  )
}

export default Student
