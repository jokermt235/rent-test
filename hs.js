const bcrypt = require('bcrypt');
bcrypt.hash('nc654321Cn', 10, function(err, hash) {
      console.log(hash);
});
