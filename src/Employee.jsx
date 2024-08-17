import React from 'react'

function Employee() {

    const employee = [
        {empId:1,empName:"Manu",empDesignation:"Developer"},
        {empId:2,empName:"Appu",empDesignation:"Tester"},
        {empId:3,empName:"Luke",empDesignation:"Designer"},
        {empId:4,empName:"Max",empDesignation:"Hr"}
    ]

  return (
    <div>
        <hr />
        {
            employee.map(item=>(
                <div>
                    Employee Id: {item.empId} <br />
                    Employee Name: {item.empName} <br />
                    Employee Designation: {item.empDesignation} <br /><hr />
                </div>
            ))
}
    </div>
  )
}

export default Employee
