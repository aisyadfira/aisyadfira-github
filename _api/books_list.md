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
   Hello there! I’m Aisya, a seasoned professional passionate about technical support and leadership. By day, I thrive in troubleshooting and resolving complex issues as a Remote Customer Service expert and Team Leader. When I’m not immersed in the tech world, I embrace my creative side. I love exploring my artistic flair through drawing and creating illustrations.
Once upon a time, fate intervened as I stumbled upon a job opportunity in technical support while scouring a job portal. Little did I know that this would mark the beginning of an incredible adventure. Over the past two years, I've dedicated myself to assisting customers and resolving their IT tribulations.
Each day brought new puzzles to unravel, and I discovered a deep-rooted affinity for the complexities that this role presented.My journey led me to embrace the transformative power of technical support, much like my love for illustration and website building, I grew to appreciate the beauty of conquering intricate IT challenges. Today, I stand at the crossroads of possibility, eager to continue my career in this field that I've come to cherish.
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
