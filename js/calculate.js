function addPlayers(playersBtn, player) {
    document.getElementById(playersBtn).addEventListener('click', function () {
        const totalItem = document.getElementsByTagName('li').length;
        if (5 > totalItem) {
            let list = document.getElementById('players-name');
            let playerName = document.getElementById(player).innerText;
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(playerName));
            list.appendChild(li);
            const button = document.getElementById(playersBtn);
            button.setAttribute('disabled', '');
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
    const perPlayerCostInput = document.getElementById('per-player-cost');
    const perplayerCostText = perPlayerCostInput.value;
    const perPlayerCost = parseFloat(perplayerCostText);
    const totalPlayers = document.getElementsByTagName('li').length;
    const totalPlayersCost = totalPlayers * perPlayerCost;
    document.getElementById('player-expenses').innerText = totalPlayersCost;
    perPlayerCostInput.value = '';

})

document.getElementById('calculate-total').addEventListener('click', function () {
    // const playersCost = document.getElementById('player-expenses');
    const playersCostTotal = parseFloat(document.getElementById('player-expenses').innerText);
    let managerCostInput = document.getElementById('manager-cost');
    const managerCostText = managerCostInput.value;
    let managerCost = parseFloat(managerCostText);
    let coachCostInput = document.getElementById('coach-cost');
    const coachCostText = coachCostInput.value;
    let coachCost = parseFloat(coachCostText);
    console.log(typeof (coachCost))
    const allCost = playersCostTotal + managerCost + coachCost;
    document.getElementById('total').innerText = allCost;
    // const currentTotalText = total.innerText;
    // const currentTotal = parseFloat(currentTotalText);
    // total.innerText = allCost;
    managerCostInput.value = '';
    coachCostInput.value = '';
})