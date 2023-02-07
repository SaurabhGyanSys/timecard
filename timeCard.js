import { LightningElement, track } from 'lwc';

export default class TimeCard extends LightningElement {
    @track date = '';
    @track startTime = '';
    @track endTime = '';
    @track hoursWorked = '';
    @track description = '';
    
    @track columns = [
        { label: 'Date', fieldName: 'date' },
        { label: 'Hours Worked', fieldName: 'hoursWorked' },
        { label: 'Description', fieldName: 'description' },
      ];

      @track data = [
        {
          id: 1,
          date: '2022-01-01',
          hoursWorked: '10:00 AM',
          description: 'Meeting with team'
        },
        {
          id: 2,
          date: '2022-01-02',
          hoursWorked: '11:00 AM',
          description: 'Training session'
        },
        {
          id: 3,
          date: '2022-01-03',
          hoursWorked: '12:00 PM',
          description: 'Conference call'
        }
      ];
      
    @track employeeId;

    handleEmployeeIdChange(event) {
      this.employeeId = event.target.value;
    }
  
    handleLogin() {
      console.log(`Employee ID: ${this.employeeId}`);
      // Add code to call the backend service to validate the employee id
    }

    currentDateTime = new Date().toLocaleString();
    connectedCallback() {
        setInterval(() => {
            this.currentDateTime = new Date().toLocaleString();
        }, 1000);
    }

    handleDateChange(event) {
      this.date = event.target.value;
    }
    handleStartTimeChange(event) {
      this.startTime = event.target.value;
      this.calculateHoursWorked();
    }
    handleEndTimeChange(event) {
      this.endTime = event.target.value;
      this.calculateHoursWorked();
    }
    calculateHoursWorked() {
      if (this.startTime && this.endTime) {
        let start = new Date('1970-01-01T' + this.startTime);
        let end = new Date('1970-01-01T' + this.endTime);
        let difference = end.getTime() - start.getTime();
        this.hoursWorked = (difference / 1000 / 60 / 60).toFixed(2);
      } else {
        this.hoursWorked = '';
      }
    }
    handleSave() {
      // Add code to save the timesheet data to the server
      console.log('Working');
    }
    handleCancel(){
        // Add code to cancele the timesheet data to the server
        console.log('Working');
    }
}