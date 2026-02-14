<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prove You Know Me 😏</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="quiz-card">
  <h1>Answer These About Me ❤️</h1>
  <p id="timer">Time Left: 1:00</p>

  <form id="quizForm">
    <div class="question">
      <p>1. What is my favorite color?</p>
      <input type="text" id="q1">
    </div>

    <div class="question">
      <p>2. Where did we first meet?</p>
      <input type="text" id="q2">
    </div>

    <div class="question">
      <p>3. What food do I love most?</p>
      <input type="text" id="q3">
    </div>

    <div class="question">
      <p>4. What name do I call you most?</p>
      <input type="text" id="q4">
    </div>

    <button type="button" onclick="checkQuiz()">Submit Answers</button>
  </form>

  <div id="passcodeSection" class="hidden">
    <h3>Time’s up 😈 Enter Secret Passcode</h3>
    <input type="password" id="passcode">
    <button onclick="checkPasscode()">Enter</button>    <button onclick="backToQuiz()">Back to Quiz</button>  </div>

</div>

<script src="script.js"></script>
</body>
</html>
