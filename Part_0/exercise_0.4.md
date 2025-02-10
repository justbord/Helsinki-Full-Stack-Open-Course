# Exercise 0.4 - New Note Diagram
This shows the exchange between the browser and server when a new note is created from this webiste:
https://studies.cs.helsinki.fi/exampleapp/notes

In this situation the website is already loaded, and the following shows what happens when a new note is added.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of browser: Data is submitted to the new page. 

    server-->>browser: redirects to https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note right of browser: The new page runs some code on the server, and redirects to the original page which results in: 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: data tranfered back in JSON format
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
