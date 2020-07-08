class View {
  constructor(game, $el) {}

  bindEvents() {
    $('ul').on('click', 'li', e => {
      const $li = $(e.currentTarget);
      const $square = $li.attr("id");
      //console.log($square);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = [parseInt($square[0]), parseInt($square[2])];
    game.playMove(pos);
    const mark = game.board.grid[pos[0]][pos[1]];
    // debugger
    const $li = $(`#${pos[0]}-${pos[1]}`);
    //const $li = $('li')
    // debugger
    //console.log($li.attr("id"));
    //$('#1-1').addClass("X");
    $li.html(mark);
    $li.addClass('marked')
    // debugger
    console.log(game.isOver());
    if (game.isOver()) {
      const h1 = $("<h1>").text(`${mark} Wins!!`);
      $('winner').append(h1);
    }
  }

  setupBoard() {
    const $newUl = $('<ul>');
    $newUl.addClass('board');
    const $newLi = $('<li>');
    const $figure = $('figure');
    
    $figure.append($newUl);    
    for(let i = 0;i<9;i++) {
      let x = Math.floor(i / 3);
      let y = (i % 3);
      $newUl.append('<li>');
      $('li').last().attr("id",`${x}-${y}`)
    };
  }
}

module.exports = View;
