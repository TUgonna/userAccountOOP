module.exports={
	userAccount: function (fullName, userName, password){
    this.fullName=fullName;
    this.userName=userName;
    var _password=password;
    
    this.changePassword = function (currentPassword, newPassword){ 
      if(currentPassword==_password){
        _password=newPassword;
        return "password has been changed to " + _password;
      }
      else{
        return "password is incorrect";
      }
    };
  }
  
}

