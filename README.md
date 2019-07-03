- Student can write a funcitoning react application
- Student can write a funcitoning Express API
- Student can request data from Express API
- Student can display data from Express API

#  NO-DB REVIEW

## frontend checklist

- reset.css
- package.json
    - main: server => so we can type nodemon without giving file

### proxy
    - setupProxy.js
        - :3008

### dependencies

- axios (only for external requests)
- http-proxy-middleware

### front-end folder structure

- src/
    - App.js => class
    - index.js
    - components/
        - LeaderBoard.js
        - Player.js
        - RatioDisplayer.js
        - PlayerForm.js

## backend checklist


### server folder structure
- server/
    - index.js
    - controller/
        - playerController.js
        - gameController.js (if time)

### dependencies
- express

### routes
**playerController.js**
- get: '/api/cheetah'
- post: '/api/woodpecker'
- put: '/api/tapeworm/:id'
- delete: '/api/vulture/:id'