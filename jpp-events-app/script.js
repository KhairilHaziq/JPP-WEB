document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    
    const name = document.getElementById('name').value;
    const event = document.getElementById('event').value;
  
    
    const message = `Thank you, ${name}, for registering for the ${event}. We look forward to seeing you there!`;
    document.getElementById('confirmationMessage').textContent = message;
  
    
    this.reset();
  });
  