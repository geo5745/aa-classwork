

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('canvas'); // need to grab element from DOM
    canvasEl.height = 500;
    canvasEl.width = 500;
    const ctx = canvasEl.getContext('2d'); // need to get ctx from canvasEl

    // draw black rectangle that takes up entire canvasEl
    ctx.fillRect(0, 0, 500, 500);

    // draw red circle
    ctx.beginPath();
    ctx.arc(250, 250, 20, 0, 2*Math.PI);
    ctx.fillStyle = 'red'; 
    ctx.fill();
})