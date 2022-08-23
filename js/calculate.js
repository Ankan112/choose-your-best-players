function addPlayers(playersBtn, player) {
    document.getElementById(playersBtn).addEventListener('click', function () {
        const totalItem = document.getElementsByTagName('li').length;
        if (5 > totalItem) {
            let list = document.getElementById('players-name');
            let playerName = document.getElementById(player).innerText;
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(playerName));
            list.appendChild(li);
            // const button = document.querySelector(playersBtn);
            // button.setAttribute('disabled', '');
        }
        else {
            alert('Maximan Players Already Added')
        }
    })
}
addPlayers('player-btn-1', 'player-1')
addPlayers('player-btn-2', 'player-2')
addPlayers('player-btn-3', 'player-3')
addPlayers('player-btn-4', 'player-4')
addPlayers('player-btn-5', 'player-5')
addPlayers('player-btn-6', 'player-6')

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = parseFloat(document.getElementById('per-player-cost').value);
    const totalPlayers = document.getElementsByTagName('li').length;
    const totalPlayersCost = totalPlayers * perPlayerCost;
    document.getElementById('player-expenses').innerText = totalPlayersCost;

})


document.getElementById('calculate-total').addEventListener('click', function () {
    // const playersCost = document.getElementById('player-expenses');
    const playersCostTotal = parseFloat(document.getElementById('player-expenses').innerText);
    let managerCostText = document.getElementById('manager-cost').value
    let managerCost = parseFloat(managerCostText);
    let coachCostText = document.getElementById('coach-cost').value
    let coachCost = parseFloat(coachCostText);

    const allCost = playersCostTotal + managerCost + coachCost;
    document.getElementById('total').innerText = allCost;
    // const currentTotalText = total.innerText;
    // const currentTotal = parseFloat(currentTotalText);
    // total.innerText = allCost;
    managerCostText = '';
    coachCostText = '';
})