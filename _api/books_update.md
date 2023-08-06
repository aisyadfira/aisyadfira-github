---
title: /contacts
position_number: 1.2
type: put
description: 
parameters:
  - name: LinkedIn
    content: <a href="www.facebook.com/aisyadfira"> facebook/aisyadfira </a>
  - name: Facebook
    content: <a href="www.linkedin.com/in/aisyadfira"> linkedin.com/in/aisyadfira </a>
content_markdown: |-
left_code_blocks:
  - code_block: |-
      $.ajax({
        "url": "http://api.myapp.com/books/3",
        "type": "PUT",
        "data": {
          "token": "YOUR_APP_KEY",
          "score": 5.0,
          "title": "The Book Stealer"
        },
        "success": function(data) {
          alert(data);
        }
      });
    title: jQuery
    language: javascript
right_code_blocks:
  - code_block: |2-
      {
        "id": 3,
        "title": "The Book Stealer",
        "score": 5,
        "dateAdded": "5/1/2015"
      }
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Book doesn't exist"
      }
    title: Error
    language: json
---
