 /*Array of feedback messages*/
      var feedbacks = [
        "Great job! Your feeback is much appreciated.",
        "Thank you for your valuable input!",
        "We appreciate your thoughts!"
      ];

      //Function to display a random feedback message
      function displayRandomFeedback() {
        var randomIndex= Math.floor(Math.random() * feedbacks.length);
        var feedback = feedbacks[randomIndex];
        var feedbackContainer = document.getElementById("feedback-container");
        feedbackContainer.innerHTML = feedback;
      }
      // Call the function to display a random message on page load
  displayRandomFeedback();


