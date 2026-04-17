document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime() {
        // Use Date.now() for accurate epoch time in milliseconds
        timeElement.textContent = Date.now();
    }

    // Update every 100ms for responsiveness
    setInterval(updateTime, 100);
    
    // Initial call to prevent 1s delay
    updateTime();
});
