//fetch('agenda.json')
fetch('https://www.koliseo.com/codemotion/codemotion-madrid/r4p/5753906952929280/agenda', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(function(response) {
  return response.json();
})
.then(function(agenda) {
  var speakers = {};
  agenda.days.forEach(function(day) {
    day.tracks.forEach(function(track) {
      track.slots.forEach(function(slot) {
        var contents = slot.contents;
        if (contents && contents.type == 'TALK') {
          contents.authors.forEach(function(author) {
            speakers[author.id] = author
          })
        }
      })
    })
  })
  console.log(speakers);
  var speakerValues = [];
  for (var s in speakers) {
    speakerValues.push(speakers[s]);
  }
  speakerValues.sort(function(s1, s2) {
    return s1.name.localeCompare(s2.name); 
  });
  document.getElementsByClassName('badges')[0].innerHTML = speakerValues.map(function(speaker) {
    var twitter = !speaker.twitterAccount? '' : ('<br><div class="twitter">@' + speaker.twitterAccount + '</div>');
    return '<section class="badge"><div class="cutting-top"></div><div class="badge-contents"><img class="avatar" src="' + speaker.avatar + '"><div class="name">' + 
  speaker.name + twitter +  '</div></div><div class="cutting-bottom"></div></section>'
  
  }).join('');
})
.catch(function(e) {
  console.error(e.message);
  document.getElementsByClassName('badges')[0].innerHTML = e.message;
});