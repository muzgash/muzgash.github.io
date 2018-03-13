var dsv = Plotly.d3.dsv(';')
function graficar(file,div,key){dsv(file, function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var words=unpack(rows,key.toLowerCase());
  var count=unpack(rows,'count');
  

  var list = [];
  for (var j = 0; j < words.length; j++) 
    list.push({'word': words[j], 'count': Number(count[j])});

  //2) sort:
  list.sort(function(a, b) {
    return ((a.count > b.count) ? -1 : ((a.count == b.count) ? 0 : 1));
  });


  //3) separate them back out:
  for (var k = 0; k < list.length; k++) {
    words[k] = list[k].word;
    count[k] = list[k].count;
  }

  if(key== 'Mentions') {
    var data = [{
      type:'bar',
      orientation: 'h',
      y:words.slice(1,21),
      x:count.slice(1,21)
    }];
  } else {
    var data = [{
      type:'bar',
      orientation: 'h',
      y:words.slice(0,20),
      x:count.slice(0,20)
    }];
  }

  var layout = {
    title:key,
    margin: {l: 150,r:0},
    yaxis: {
      ticklen: 0,
	  tickfont: {size:12},
      type: 'category',
      autotick: false
    },
    xaxis: {title:"Count"}
  }

  Plotly.newPlot(div,data,layout);
})
}
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/fajardo/hashtags.csv",'fajardoHashtags','Hashtags')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/fajardo/users.csv",'fajardoUsers','Users')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/fajardo/mentions.csv",'fajardoMentions','Mentions')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/fajardo/words.csv",'fajardoWords','Words')

/*graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/petro/hashtags.csv",'petroHashtags','Hashtags')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/petro/users.csv",'petroUsers','Users')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/petro/mentions.csv",'petroMentions','Mentions')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/petro/words.csv",'petroWords','Words')*/

graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/delacalle/hashtags.csv",'delacalleHashtags','Hashtags')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/delacalle/users.csv",'delacalleUsers','Users')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/delacalle/mentions.csv",'delacalleMentions','Mentions')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/delacalle/words.csv",'delacalleWords','Words')

/*graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/vargas/hashtags.csv",'vargasHashtags','Hashtags')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/vargas/users.csv",'vargasUsers','Users')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/vargas/mentions.csv",'vargasMentions','Mentions')
graficar("http://c3.itm.edu.co/~gerardo.gutierrez/social/politics/vargas/words.csv",'vargasWords','Words')
*/
