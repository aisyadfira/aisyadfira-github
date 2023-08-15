---
title: /about me
position_number: 1.0
type: get
description: A little bit about me
parameters:
  - name: offset
    content: Offset the results by this amount
  - name: limit
    content: Limit the number of books returned
content_markdown: |-
  This call will return a maximum of 100 books
  {: .info }
Hey there! I'm Aisya, a seasoned professional who's truly passionate about technical support and leadership. During the day, I excel at resolving complex issues as a Remote Customer Service expert and Team Leader. Beyond the tech world, I embrace my creative side, indulging in drawing and illustration. Fate smiled upon me when I stumbled upon a technical support job on a job portal. Little did I know that this would be the start of an incredible journey. For the past two years, I've been dedicated to assisting customers and untangling their IT problems. Every day presents new puzzles to solve, and I've developed a deep affinity for the challenges this role offers. This path has taught me the power of technical support, much like my love for illustration. Today, I stand ready to continue my career in this cherished field, where every challenge is an opportunity.
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/books/", { "token": "YOUR_APP_KEY"}, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.myapp.com/books/", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.myapp.com/books?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.readme.com/orders?key=YOUR_APP_KEY
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      [
        {
          "name": Aisya,
          "location": Amsterdam,
          "origin": Bali,
          "skills": {
                "Technical Support"
                "Team Leadership"
                "Illustration"
                    }
        },
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": ""
      }
    title: Error
    language: json
---
