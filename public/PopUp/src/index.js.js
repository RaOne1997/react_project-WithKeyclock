import { loadUiFrreback } from './feedback.js';
import { loadNewsContents } from './news.js';

const initializeFeedbackPopup = () => {
  // Styles for the popup and floating button
  const styles = `
      #feedback-popup { display: none; position: fixed; bottom: 0; right: 20px; background: red; border: 1px solid #ccc; width: 400px; max-height: 600px; height:600px; padding: 10px; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
      #feedback-popup-header { display: flex; justify-content: space-between; }
      #feedback-popup-content { margin-top: 10px; }

      #feedback-button { position: fixed; bottom: 20px; right: 20px; background: #007BFF; color: white; border: none; border-radius: 50%; width: 50px; height: 50px; font-size: 24px; cursor: pointer; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }

      
.navbarfeedback {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  padding: 10px 0;
  z-index: 500;
  font-family: Arial, sans-serif;
}

.nav-item-feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-item-feedback i {
  font-size: 24px;
  margin-bottom: 5px;
}

.nav-item-feedback:hover {
  color: #007BFF;
}

    `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const cropperCssLink = document.createElement("link");
  cropperCssLink.rel = "stylesheet";
  cropperCssLink.href = "https://unpkg.com/cropperjs/dist/cropper.css";
  document.head.appendChild(cropperCssLink);

  const html2canvasScript = document.createElement("script");
  html2canvasScript.src = "https://unpkg.com/html2canvas/dist/html2canvas.min.js";
  document.head.appendChild(html2canvasScript);

  const cropperScript = document.createElement("script");
  cropperScript.src = "https://unpkg.com/cropperjs/dist/cropper.js";
  document.head.appendChild(cropperScript);

  // Floating button
  const feedbackButton = document.createElement('button');
  feedbackButton.id = 'feedback-button';
  feedbackButton.innerText = '+';
  document.body.appendChild(feedbackButton);

  // Popup HTML structure
  const popup = document.createElement('div');
  popup.id = 'feedback-popup';

  popup.innerHTML = `
    <div id="feedback-popup-header">
      <h2>Feedback</h2>
      <button id="close-popup">X</button>
    </div>
    
    <div id="feedback-popup-content">
      <div id="feedback-content"></div>
      <div id="news-content" style="display: none;"></div>
    </div>
     <div class="navbarfeedback ">
    <div id ="feedback-tab" class="nav-item-feedback" [class.active]="activeTab === 'feedback'" (click)="setActiveTab('feedback')">
      <i class="bi bi-house-fill"></i>
      <span>Home</span>
    </div>
    <div class="nav-item-feedback" [class.active]="activeTab === 'message'" (click)="setActiveTab('message')">
      <i class="bi bi-chat-right-dots-fill"></i>
      <span>Messages</span>
    </div>
    <div id ="news-tab"  class="nav-item-feedback">
      <i class="bi bi-newspaper" [class.active]="activeTab === 'news'" (click)="setActiveTab('news')"></i>
      <span>News</span>
    </div>
    <div class="nav-item-feedback" [class.active]="activeTab === 'help'" (click)="setActiveTab('help')">
      <i class="bi bi-question-circle"></i>
      <span>Help</span>
    </div>
  </div>
  `;

  document.body.appendChild(popup);

  // Load feedback UI
  loadUiFrreback(document.getElementById('feedback-content'));

  // Load news contents
  loadNewsContents(document.getElementById('news-content'));

  // Event listeners for tabs
  document.getElementById('feedback-tab').addEventListener('click', function() {
    document.getElementById('feedback-content').style.display = 'block';
    document.getElementById('news-content').style.display = 'none';
    this.classList.add('active');
    document.getElementById('news-tab').classList.remove('active');
  });

  document.getElementById('news-tab').addEventListener('click', function() {
    document.getElementById('feedback-content').style.display = 'none';
    document.getElementById('news-content').style.display = 'block';
    this.classList.add('active');
    document.getElementById('feedback-tab').classList.remove('active');
  });

  // Event listener for close button
  document.getElementById('close-popup').addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Event listener for floating button
  feedbackButton.addEventListener('click', function() {
    popup.style.display = 'block';
  });
}
module.exports = {
  initializeFeedbackPopup
};