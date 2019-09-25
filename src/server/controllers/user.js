const sha256 = require('js-sha256');
const SALT = "crazy shit meant to confuse me";

module.exports = (db) => {

    /*
    * ===========================================
    * Controller logic
    * ===========================================
    */





    let registerCallback = (req, res) => {
        let newUser = req.query;


        let hashedPass = sha256(newUser.password + SALT);
        newUser.password = hashedPass;
        // res.send("hahahah")
        // check if username exists in db
        db.user.registerNewUser(newUser, (error, result) =>{
            if(result === null){
                console.log('failed!!')
                console.log(error)
                const data = {
                    status: '502 Bad Gateway',
                    msg: 'Failed to create account'
                }
                res.send(data);
            } else {
                console.log(result)
                console.log('new account created!!')
                const data = {
                    user: result[0]
                }
                res.send("data");
                // res.redirect(301,`http://localhost:3000/`);
            }
        });
    };

    let loginCallback = (req, res) => {
        let returningUser = req.query;
        const username = returningUser.username;
        console.log(username)

        let hashedPass = sha256(returningUser.password +SALT);
        returningUser.password = hashedPass;
        console.log("++++++++++++++++")
        console.log(returningUser)
        console.log("Check if username exists")
        // check if user entered a valid username
        db.user.checkUserName(username, (error, result) =>{
            // if results of query returns nothing send error
            if(result === null){
                console.log('That username does not exists')
                console.log(error)
                const data = {
                    status: '404 Not Found',
                    msg: 'That username does not exists'
                }
                res.send(data);
            } else {
                console.log('That username exists')
                // get users details validate password entered
                db.user.getUserDetails(username, (error, result) =>{
                    if(result === null){
                        console.log('failed!!')
                        console.log(error)
                        const data = {
                            status: '502 Bad Gateway',
                            msg: 'Failed to log in'
                        }
                        res.send(data);
                    } else{
                        console.log("check for password match")
                        console.log(result)
                        const loggedUser = result[0]
                        //check if password entered, matches password in db
                        if(result[0].password === hashedPass ){
                            console.log('Password Matches!!')
                            console.log(`welcome back ${result[0].username}!!`)

                            // hash users name with 'loggedin' and SALT
                            // has users id with SALT
                            const hashedUserLogged = sha256(result[0].username + 'loggedin' + SALT);
                            const hashedId = sha256(result[0].id + SALT);

                            res.cookie('usrLogged', hashedUserLogged )
                            res.cookie('userId', hashedId)

                            db.user.setLogInDate(username, (error, result) =>{
                                if(result === null){
                                    console.log('failed!!')
                                    console.log(error)
                                    const data = {
                                        status: '502 Bad Gateway',
                                        msg: 'Failed to log in'
                                    }
                                    res.send(data);
                                } else{
                                    res.send(loggedUser)
                                }
                            })
                        } else {
                            console.log('Wrong Password!!')
                            console.log(error)
                            const data = {
                                status: '400 Bad Request',
                                msg: 'Wrong Password!!'
                            }
                            res.send(data);
                        }
                    }
                });
            }
        })
    };



    let profileCallback = (req, res) => {
        let userName = req.params.user;
        console.log(userName)
        console.log(req.cookies.usrLogged)

        const hashedUserLogged = sha256(userName + 'loggedin' + SALT);
        const checkCookie = req.cookies.usrLogged

        if(checkCookie === hashedUserLogged){
            console.log("it matches!")
            db.user.getUserDetails(userName, (error, result) =>{
                if(result !== null){
                    console.log("\n ==[ results ]== \n")
                    console.log(result)

                    const userData = {
                        id: result[0].id,
                        name: result[0].name,
                        lastLogin: result[0].last_login,
                        lastLoginParsed: result[0].lastlogin,
                        registerDateParsed: result[0].created,
                    }
                    console.log(userData.id)
                    // after validation
                    // get all user novels
                    db.userNovelsDb.getUserNovels(userData.id, (error, result) =>{
                        // if user has no novels in their list
                        // do this
                        if(result === false){
                            console.log('User has no followed novels in their list')
                            console.log(result)


                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('profile', fullData);

                        // if user has novels in their list
                        // do this
                        } else if(result !== null) {
                            console.log('User has followed novels in their list')
                            console.log(result)

                            const fullData = {
                                user: userData,
                                novels: result
                            }
                            res.render('profile', fullData);

                        }else {
                            console.log('failed!!')
                            console.log(error)
                            const data = {
                                status: '502 Bad Gateway',
                                msg: 'invalid response'
                            }
                            res.status(502).render(`errorpage`, data);
                        }
                    });

                } else {
                    console.log('failed!!')
                    console.log(error)
                    const data = {
                        status: '400 Bad Request',
                        msg: 'failed to login'
                    }
                    res.status(400).render(`errorpage`, data);
                }
            });
        } else{
            console.log("You is unauthorized")

            const data = {
                status: '401 Unauthorized',
                msg: 'There was an error. Please Login to your account'
            }
            res.status(401).render(`errorpage`, data);
        }
    };

    let logoutCallback = (req, res) => {
        const userName = req.params.user
        console.log('preparing to logout')
        console.log(req.cookies)
        const hashedUserLogged = sha256('loggedout' + SALT);
        db.usersDb.setLogOutDate(userName, (error, result) =>{
             // if results of query returns nothing send error
            if(result === null){
                console.log('Failed to Logout')
                console.log(error)
                const data = {
                    status: '502 Bad Gateway',
                    msg: 'Failed to Log Out'
                }
                res.status(502).render(`errorpage`, data);
            } else {
                res.clearCookie('userId');
                res.cookie('usrLogged', hashedUserLogged)
                res.redirect(301,'/webnosser')
            }
        })
    };

  /*
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    register: registerCallback,
    login: loginCallback,
    logout: logoutCallback,
    profile: profileCallback,

  };

}