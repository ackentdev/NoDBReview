const express = require('express');
const app = express();
const { cheetahAllPlayers, woodpeckerPlayer, tapewormPlayer, vulturePlayer } = require("./controller/playerController");
// allows us to receive and parse body requests
app.use(express.json());

app.get("/api/cheetah", cheetahAllPlayers);

app.post("/api/woodpecker", woodpeckerPlayer);

app.put("/api/tapeworm/:id", tapewormPlayer)

app.delete("/api/vulture/:id", vulturePlayer)

const port = 3008;
app.listen(port, () => 
console.log(`server listening on port ${port} bro!!`)
);
