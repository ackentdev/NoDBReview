let players = [{
    id: 1,
    name: "Josh",
    campus: "Phoenix",
    role: "PING PONG GOD",
    wins: 0,
    losses: 0
}];
let id = 2
module.exports = {
    cheetahAllPlayers: (req, res) => {
        res.status(200).send(players);
    },
    woodpeckerPlayer: (req, res) => {
        const { name, campus, role} = req.body;
        players.push({id, name, campus, role, wins: 0, losses: 0});
        id++;
        res.status(200).send(players);
    },
    tapewormPlayer: (req, res) => {
        const tapewormId = req.params.id;
        const { match } = req.query;
        const playerIndex = players.findIndex((player) => player.id == tapewormId);
        
        if(playerIndex === -1) {
            res.status(404).send("Womp-Womp! Player not found!");
        } else{
            if (match === "true") {
                players[playerIndex].wins++
            } else {
                players[playerIndex].losses++
            }
         res.status(200).send(players);
        }
        // players[playerIndex]

    },
    vulturePlayer: (req, res) => {

    }
}