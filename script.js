function calculate() {
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const potionType = document.querySelector('input[name="potionType"]:checked').value;
    
    if (days === 0 && hours === 0 && minutes === 0) {
        alert('Please enter building time');
        return;
    }
    
    // Convert to total minutes
    const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes;
    
    // Calculate reduced time based on potion
    const multiplier = potionType === 'laboratory' ? 24 : 10;
    const reducedMinutes = totalMinutes / multiplier;
    
    // Convert back to days, hours and minutes
    const reducedDays = Math.floor(reducedMinutes / (24 * 60));
    const reducedHours = Math.floor((reducedMinutes % (24 * 60)) / 60);
    const remainingMinutes = Math.floor(reducedMinutes % 60);
    
    // Calculate completion time (current time + reduced time)
    const now = new Date();
    const completionTime = new Date(now.getTime() + (reducedMinutes * 60000));
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p><strong>Original Time:</strong> ${days}d ${hours}h ${minutes}m</p>
        <p><strong>Potion:</strong> ${potionType === 'laboratory' ? 'Laboratory (24x)' : 'Building Potion (10x)'}</p>
        <p><strong>Result Time:</strong> ${reducedDays}d ${reducedHours}h ${remainingMinutes}m</p>
        <p><strong>Finish on:</strong> ${completionTime.toLocaleString()}</p>
    `;
    resultDiv.style.display = 'block';
}