/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = function(employeeDataArray){
    return {
        firstName: employeeDataArray[0],
        familyName: employeeDataArray[1],
        title: employeeDataArray[2],
        payPerHour: employeeDataArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

const createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return this    
}

const hoursWorkedOnDate = function(dateInput){
    const targetInDate = this.timeInEvents.find(function(e){
        return e.date === dateInput
    })

    const targetOutDate = this.timeOutEvents.find(function(e){
        return e.date === dateInput
    })

    return (targetOutDate.hour - targetInDate.hour) / 100

}

const wagesEarnedOnDate = function(dateInput){
    return hoursWorkedOnDate.call(this, dateInput) * this.payPerHour
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(employeeArray, targetName){
    return employeeArray.find(function(e){
        return e.firstName === targetName
    })
}


const calculatePayroll = function (employeeArray) {
    return employeeArray.reduce((total, record) => {
        return total + allWagesFor.call(record)
    }, 0)
    
}



