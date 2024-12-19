// export function loadUiFrreback(container) {
//   container.innerHTML = `
//     <div id="chat-container" style="display: flex; flex-direction: column; height: 400px; border: 1px solid #ccc; padding: 10px; overflow-y: auto;">
//     <div id="chat-messages" style="flex-grow: 1; overflow-y: auto; margin-bottom: 10px;">
//       <!-- Chat messages will be appended here -->
//     </div>
//     <textarea id="feedback-text" placeholder="Enter your message" style="width: 100%; height: 50px; resize: none; margin-bottom: 10px;"></textarea>
//     <button id="submit-feedback" style="align-self: flex-end;">Send</button>
//   </div>
//   `;

//   document.getElementById('submit-feedback').addEventListener('click', function() {
//     const feedback = document.getElementById('feedback-text').value;

//     if (feedback.trim()) {
//       fetch('https://your-api-url/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           feedback: feedback,
//           pageUrl: window.location.href, // Include the page URL
//         }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         alert('Feedback submitted!');
//       })
//       .catch(error => {
//         alert('Failed to submit feedback.');
//       });
//     } else {
//       alert('Please enter feedback before submitting.');
//     }
//   });
// }

export function loadUiFrreback(container) {
  container.innerHTML = `
    <div id="chat-container" style="display: flex; flex-direction: column; height: 400px; border: 1px solid #ccc; padding: 10px; overflow-y: auto;">
      <div id="chat-messages" style="flex-grow: 1; overflow-y: auto; margin-bottom: 10px;">
        <!-- Chat messages will be appended here -->
      </div>
      <textarea id="feedback-text" placeholder="Enter your message" style="width: 100%; height: 50px; resize: none; margin-bottom: 10px;"></textarea>
      <button id="submit-feedback" style="align-self: flex-end;">Send</button>
      <button id="capture-btn" style="align-self: flex-end; margin-top: 10px;">Capture Screenshot</button>
    </div>
    <div id="screenshot-container" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); justify-content: center; align-items: center;">
      <img id="screenshot" src="" alt="Screenshot" style="max-width: 100%; max-height: 100%;">
      <button id="crop-btn">Crop</button>
      <button id="save-btn">Save</button>
    </div>
  `;

  document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedback = document.getElementById('feedback-text').value;

    if (feedback.trim()) {
      fetch('https://your-api-url/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback: feedback,
          pageUrl: window.location.href, // Include the page URL
        }),
      })
      .then(response => response.json())
      .then(data => {
        alert('Feedback submitted!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  });

  // document.getElementById('capture-btn').addEventListener('click', function() {
  //   html2canvas(document.body).then(canvas => {
  //     const screenshotContainer = document.getElementById('screenshot-container');
  //     const screenshot = document.getElementById('screenshot');
  //     screenshot.src = canvas.toDataURL();
  //     screenshotContainer.style.display = 'flex';

  //     const cropper = new Cropper(screenshot, {
       
  //       dragMode: 'crop'
        
  //     });

  //     document.getElementById('crop-btn').addEventListener('click', function() {
  //       const croppedCanvas = cropper.getCroppedCanvas();
  //       screenshot.src = croppedCanvas.toDataURL();
  //       cropper.destroy();
  //     });

  //     document.getElementById('save-btn').addEventListener('click', function() {
  //       const link = document.createElement('a');
  //       link.href = screenshot.src;
  //       link.download = 'screenshot.png';
  //       link.click();
  //     });
  //   });
  // });



  document.getElementById('capture-btn').addEventListener('click', function() {
    html2canvas(document.body).then(canvas => {
      const screenshotContainer = document.getElementById('screenshot-container');
      const screenshot = document.getElementById('screenshot');
      screenshot.src = canvas.toDataURL();
      screenshotContainer.style.display = 'flex';
  
      const cropper = new Cropper(screenshot, {
        dragMode: 'crop',
        autoCrop: true,
        cropend: function() {
          const croppedCanvas = cropper.getCroppedCanvas();
          screenshot.src = croppedCanvas.toDataURL();
          cropper.destroy();
          screenshotContainer.style.display = 'none';
  
          const link = document.createElement('a');
          link.href = screenshot.src;
          link.download = 'screenshot.png';
          link.click();
        }
      });
    });
  });
}

// Include these scripts in your HTML file
// <script src="https://unpkg.com/html2canvas/dist/html2canvas.min.js"></script>
// <script src="https://unpkg.com/cropperjs/dist/cropper.js"></script>
// <link href="https://unpkg.com/cropperjs/dist/cropper.css" rel="stylesheet">